const request = require("supertest");
const server = require("../server");

const db = require("../config/dbConfig.js");
const Chapters = require("../models/chapters-model.js");

describe("chapter model", () => {
  // beforeEach(async () => {
  //   await db("chapters").del();
  // });

  describe("GET /", () => {
    it("should return 200", async () => {
      const res = await request(server).get("/api/chapter");
      expect(res.status).toBe(200);
    });

    it("should return json type", async () => {
      const res = await request(server).get("/api/chapter");
      expect(res.type).toBe("application/json");
    });

    it("should insert chapters into the db", async () => {
      const id = await Chapters.addChapter({
        city: "San Antonio",
        state: "TX",
        numvolunteers: 13,
        longitude: -80.843124,
        latitude: 35.227085
      });

      const chapters = await Chapters.findChapters();

      expect(id).not.toBeNaN();
      expect(chapters[chapters.length - 1].city).toBe("San Antonio");
    });
  });
});
