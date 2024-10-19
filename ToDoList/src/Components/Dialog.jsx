import React, { useState } from "react";

function inputDialog({closeDialog, returnData}) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");

  const addTask = () => {
    console.log("Task Added");
    const toDo = {
      task,
      description,
      dueDate,
      priority,
    }

  setTask("");
  setDescription("");
  setDueDate("");
  setPriority("");
  returnData(toDo);
  closeDialog();
  };
  return (
    <div className="dialogBoxContainer">
      <form className="dialogBox" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter a Task"
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="Date"
          placeholder="Enter dueDate"
          onChange={(e) => setDueDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter priority"
          onChange={(e) => setPriority(e.target.value)}
        />
        <button onClick={addTask} className="addTask">
          Add task
        </button>
      </form>
    </div>
  );
}

export default inputDialog;
