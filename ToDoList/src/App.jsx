import React from "react";
import { useState } from "react";
import './Cards.css'

function Cards() {
  return (
      <div id="card">
        This is a card 
      </div>
  );
}


function ToDoComponent() {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    setCards([...cards, {}]);
  };
  return (
    <div>
      <div id="cardsContainer">
        {cards.map((card, index) => (
          <Cards key={index} />
        ))}
      <button onClick={addCard} id="addBtn">
      Add Project
      </button>
      </div>
    </div>
  );
}

function Display() {
  return (
    <div>
      <h1>ToDoApp</h1>
      <hr />
      <ToDoComponent />
    </div>
  );
}

export default Display;
