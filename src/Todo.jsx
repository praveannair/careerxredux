import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "./todoSlice";
export default function Todo() {
  const [text, setText] = useState();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleAddTodo = () => {
    dispatch(addTodo(text));
  };
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };
  return (
    <div>
      <h2>Todo App</h2>
      <p>
        <input type="text" onChange={handleInputChange}></input>

        <button onClick={handleAddTodo}>Add</button>
      </p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{textDecoration:todo.completed ? "line-through" : "none"}}>
            {todo.text}
            <button onClick={() => handleToggleComplete(todo.id)}>
              {todo.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
