import * as express from "express";

export const app = express();

import { addAddRoutes } from "./app/calculate";
import { addTodoRoutes } from "./app/todos";

app.get("/api", (req, res) => {
  res.send({ message: "Welcome to api!" });
});
addTodoRoutes(app);
addAddRoutes(app);
