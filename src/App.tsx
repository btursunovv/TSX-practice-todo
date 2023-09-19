import React from "react";
import { TodoListItem } from "./TodoListItem";
import { AddTodo } from "./AddTodo";

export function App() {
  return (
    <div className="wrapper">
      <div className="todoList">
        <AddTodo />
        <TodoListItem label="Приготовить покушать" checked={false} />
        <TodoListItem label="Покакать" checked={true} />
      </div>
    </div>
  );
}
