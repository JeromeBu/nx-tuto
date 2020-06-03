import { add } from "@nx-tuto/calculator";
import { Express } from "express";

export function addAddRoutes(app: Express) {
  app.get("/api/add", (req, res) => {
    if (!req.query.a || !req.query.b)
      return res.send("a and b were not provided");
    const a = +req.query.a;
    const b = +req.query.b;
    return res.json({ a, b, result: add(a, b) });
  });
}
