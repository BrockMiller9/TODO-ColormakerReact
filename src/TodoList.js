import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const todoComponents = todos.map((todo) => (
    <Todo key={todo.id} id={todo.id} task={todo.task} removeTodo={removeTodo} />
  ));

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todoComponents}
    </div>
  );
};

export default TodoList;
