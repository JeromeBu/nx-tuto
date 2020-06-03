import { Todo } from "@nx-tuto/data";
import React from "react";

export const Todos = (props: { todos: Todo[] }) => {
  return (
    <ul>
      {props.todos.map((t) => (
        <li className={"todo"} key={t.title}>
          {t.title} !!
        </li>
      ))}
    </ul>
  );
};
