/**
 * @group integration http
 */

import { app } from "../server";
import * as supertest from "supertest";

const request = supertest(app);

describe("calls add route", () => {
  it("returns the correct result", async () => {
    const result = await request.get("/api/add?a=2&b=3");
    expect(result.body).toEqual({ a: 2, b: 3, result: 5 });
  });
});
