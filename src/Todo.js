import React from "react";

const Todo = ({ id, task, removeTodo }) => {
  const remove = () => removeTodo(id);

  return (
    <div>
      <div>{task}</div>
      <button onClick={remove}>X</button>
    </div>
  );
};

export default Todo;
