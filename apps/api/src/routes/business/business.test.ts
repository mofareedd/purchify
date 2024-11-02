import { it, describe, afterAll, beforeAll, expect } from "vitest";
import { businessRoute } from "./business.route";
import { app } from "@/app";

describe("GET /api/business", () => {
  it("should return a list of busineses with status 200", async () => {
    const res = await app.request("/api/business");

    expect(res.status).toBe(200);
    // expect(res.body).toEqual([]);
  });
});
