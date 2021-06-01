import React from "react";
import useTasks from "../hooks/useTasks";
import Calendar from "./Calendar";
import ListTasks from "./ListTasks";
import Alerts from "./Alerts";
import "./styles/App.css";

function App() {
  const [tasks, tasksManager] = useTasks();

  // Development tool lol
  window.tm = tasksManager;

  return (
    <div className="App">
      <h1>Calendar Todo</h1>
      <div className="app__wrapper">
        <Calendar tasks={tasks} tasksManager={tasksManager} />
        <ListTasks tasks={tasks} tasksManager={tasksManager} />
      </div>
      <Alerts />
    </div>
  );
}

export default App;
