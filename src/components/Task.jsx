import React from "react";

export default function Task(props) {
  const removeTask = (event) => {
    console.log(props.id);
    props.remove(props.id);
  };

  const toggleStatus = (event) => {
    props.toggle(props.id);
  };

  return (
    <li className={"task card " + (props.status ? "task--done" : "")}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <time>Date: {props.date.toISODate()}</time>
      <footer>
        <button
          className={"task-btn " + (props.status ? "complete" : "incomplete")}
          onClick={toggleStatus}
        >
          Mark as {props.status ? "pending" : "done"}
        </button>
        <button className="task-btn remove" onClick={removeTask}>
          Remove
        </button>
      </footer>
    </li>
  );
}
