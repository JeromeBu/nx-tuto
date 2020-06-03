import { Todo } from "@nx-tuto/data";
import React from "react";

export const Todos = (props: { todos: Todo[] }) => {
  return (
    <ul>
      {props.todos.map((t) => (
        <li className={"todo"}>{t.title}</li>
      ))}
    </ul>
  );
};
