import React from "react";
import "./AddTodo.css";

export const AddTodo = () => {
  return (
    <div className="AddTodoWrapper">
      <input
        className="AddTodoInput"
        placeholder="What should i do next?"
        type="text"
      />
      <button className="AddTodoButton">Add to list</button>
    </div>
  );
};
