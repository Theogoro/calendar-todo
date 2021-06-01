import React, { useState } from "react";
import AddTask from "./AddTask";
import "./styles/ListTasks.css";

export default function ListTasks(props) {
  const removeHandler = (event) => {
    props.tasksManager.removeTask(
      event.target.parentNode.parentNode.dataset["id"]
    );
  };

  const toggleStatus = (event) => {
    props.tasksManager.toggleStatus(
      event.target.parentNode.parentNode.dataset["id"]
    );
  };

  const [showModal, setShowModal] = useState(false);

  const showAddTaskModal = () => {
    setShowModal(true);
  };

  const hideTaskModal = () => {
    setShowModal(false);
  };

  return (
    <div className="Tasks">
      <h2>Tasks 📚</h2>
      <div className="tasks-main-btn__wrapper">
        <button className="task-main-btn" onClick={showAddTaskModal}>
          Add task
        </button>
        <button className="task-main-btn" onClick={props.tasksManager.clear}>
          Clear tasks
        </button>
        <button className="task-main-btn" onClick={props.tasksManager.save}>
          Save tasks
        </button>
        <button className="task-main-btn" onClick={props.tasksManager.load}>
          Load tasks
        </button>
      </div>
      {props.tasks.length === 0 && <p className="no-tasks card">No tasks 🤔</p>}
      {/* TODO: llevar a otro elemento */}
      <ul className="tasks__wrapper">
        {props.tasks.map((e) => (
          <li
            className={"task card " + (e.status ? "task--done" : "")}
            key={e.id}
            data-id={e.id}
          >
            <h3>{e.name}</h3>
            <p>{e.description}</p>
            <time>Date: {e.date.toISODate()}</time>
            <footer>
              <button
                className={"task-btn " + (e.status ? "complete" : "incomplete")}
                onClick={toggleStatus}
              >
                Mark as {e.status ? "pending" : "done"}
              </button>
              <button className="task-btn remove" onClick={removeHandler}>
                Remove
              </button>
            </footer>
          </li>
        ))}
      </ul>
      {showModal && (
        <AddTask addTask={props.tasksManager.addTask} hide={hideTaskModal} />
      )}
    </div>
  );
}
