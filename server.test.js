const supertest = require("supertest");
const server = require("./server");

describe("server.js", () => {
  it("should set the test env", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("GET /", () => {
  it("should return status 200", async () => {
    const res = await supertest(server).get("/");
    expect(res.status).toBe(200);
  });

  it("should return json", async () => {
    const res = await supertest(server).get("/");
    expect(res.type).toBe("application/json");
  });
});
