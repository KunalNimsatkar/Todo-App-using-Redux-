import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todoSlice";

const Todo = () => {
  const [todo, SetTodo] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      alert("Add Text");
    } else {
      dispatch(
        addTodo({
          title: todo,
        })
      );
    }
    SetTodo("");
  };

  return (
    <form className="todo__container" onSubmit={onSubmit}>
      <div className="todo_context">
        <input
          type="text"
          className="todo__input"
          placeholder="Enter task"
          value={todo}
          onChange={(e) => SetTodo(e.target.value)}
        />
      </div>
      <div className="todo__button">
        <button className="todo_btn">Add</button>
      </div>
    </form>
  );
};

export default Todo;
