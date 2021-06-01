import React, { useState } from "react";
import AddTask from "./AddTask";
import "./styles/ListTasks.css";
import Task from "./Task";

export default function ListTasks(props) {
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
      <ul className="tasks__wrapper">
        {props.tasks.map((e) => (
          <Task
            id={e.id}
            key={e.id}
            status={e.status}
            name={e.name}
            description={e.description}
            date={e.date}
            toggle={props.tasksManager.toggleStatus}
            remove={props.tasksManager.removeTask}
          />
        ))}
      </ul>
      {showModal && (
        <AddTask addTask={props.tasksManager.addTask} hide={hideTaskModal} />
      )}
    </div>
  );
}
