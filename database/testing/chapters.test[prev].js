const request = require("supertest");
const server = require("../../server");

const db = require("../../config/dbConfig.js");
const Chapters = require("../../models/chapters-model.js");

describe("chapter api route", () => {
  beforeEach(async () => {
    await db("chapters").del();
  });

  describe("GET /api/chapter", () => {
    test("It responds with JSON", () => {
      return request(server)
        .get("/api/chapter")
        .set("Authorization", `Bearer ${token}`)
        .then(res => {
          expect(res.statusCode).toBe(200);
          expect(res.type).toBe("application/json");
        });
    });

    it("should return 200", async () => {
      const res = await request(server).get("/api/chapter");
      expect(res.status).toBe(200);
    });

    it("should return json type", async () => {
      const res = await request(server).get("/api/chapter");
      expect(res.type).toBe("application/json");
    });

    it("should insert chapters into the db", async () => {
      await Chapters.addChapter({
        location: "San Antonio, TX",
        numvolunteers: 13,
        longitude: -80.843124,
        latitude: 35.227085
      });
      await Chapters.addChapter({
        location: "Norfolk, VA",
        numvolunteers: 52,
        longitude: -80.843124,
        latitude: 35.227085
      });

      const chapters = await db("chapters");

      expect(chapters).toHaveLength(2);
      expect(chapters[0].location).toBe("San Antonio, TX");
      expect(chapters[1].location).toBe("Norfolk, VA");
      expect(chapters[1].numvolunteers).toBe(52);
    });
  });
});
