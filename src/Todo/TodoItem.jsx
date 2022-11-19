import React from "react";
import { toggleComplete, deleteTodo } from "../feature/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };
  return (
    <li key={id}>
      <div className={`todo ${completed && "todo_completed"}`}>
        <div className="todo__left">
          <input
            type="checkbox"
            name="completed"
            checked={completed}
            className="todo__box"
            onChange={handleChange}
          />
          <h3 className="todo__text">{title}</h3>
        </div>
        <div className="todo__right">
          <button className="todo__task" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
