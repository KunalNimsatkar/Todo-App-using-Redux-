import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <Todo />
      <ul className="todo__list">
        {todos.map((todo, index) => {
          return (
            <TodoItem
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
