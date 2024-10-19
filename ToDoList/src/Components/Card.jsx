import React from "react";

function Card({ todo, removeTodo }) {
  return (
    <div className="card">
      <div className="todoDetails">
        <p>Title: {todo.task}</p>
        <p>Description: {todo.description}</p>
        <p>DueDate: {todo.dueDate}</p>
        <p>Priority: {todo.priority}</p>
      </div>
      <button onClick={removeTodo} className="removeTodo">
        Remove
      </button>
    </div>
  );
}

export default Card;
