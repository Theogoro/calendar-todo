import { DateTime } from "luxon";
import { useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const createId = () => {

    if (tasks.length === 0) {
      return 1;
    }

    let id = tasks[tasks.length - 1].id + 1;
    return id;
  }

  const tasksManager = {
    addTask: (name, description, date) => {
      setTasks([...tasks, {
        id: createId(),
        name,
        description,
        date: DateTime.fromISO(date), // To DateTime object
        status: false // Finish? 
      }]);
    },
    removeTask: (taskId) => {
      setTasks(tasks.filter(task => task.id !== Number(taskId)));
    },
    toggleStatus: (taskId) => {
      const newTasks = [...tasks];
      const index = newTasks.findIndex(e => e.id === Number(taskId));
      const toggledTask = newTasks[index];

      toggledTask.status = !toggledTask.status;

      setTasks(newTasks);
    },
    clear: () => setTasks([]),
    save: () => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    load: () => {
      const tasksString = localStorage.getItem("tasks");
      setTasks(JSON.parse(tasksString).map(e => {
        return {
          ...e,
          date: DateTime.fromISO(e.date) // Iso string => DateTime from Luxon
        }
      }));
    }
  }

  return [tasks, tasksManager]
}

export default useTasks;