import React from "react";

function Card({ todo, removeTodo }) {
  return (
    <div className="card">
      <div className="todoDetails">
        <p>Title: {todo}</p>
        <p>Description: </p>
        <p>DueDate: </p>
        <p>Priority: </p>
      </div>
      <button onClick={removeTodo} className="removeTodo">
        Remove
      </button>
    </div>
  );
}

export default Card;
