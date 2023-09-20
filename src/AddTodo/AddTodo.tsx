import React, { useState } from "react";
import "./AddTodo.css";

export const AddTodo = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="AddTodoWrapper">
      <input
        className="AddTodoInput"
        placeholder="What should i do next?"
        type="text"
      />
      <button
        onClick={() => setToggle(!toggle)}
        className={toggle ? "AddTodoButtonActive" : "AddTodoButtonInActive"}
      >
        Add to list
      </button>
    </div>
  );
};
