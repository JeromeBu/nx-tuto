import { Todo } from "@nx-tuto/interface";
import { Express } from "express";

const todos: Todo[] = [{ title: "Todo 1" }, { title: "Todo 2" }];

export function addTodoRoutes(app: Express) {
  app.get("/api/todos", (req, resp) => resp.send(todos));
  app.post("/api/addTodo", (req, resp) => {
    const newTodo = {
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    };
    todos.push(newTodo);
    resp.send(newTodo);
  });
}
