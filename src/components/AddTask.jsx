import React, { useRef, useState } from "react";
import { DateTime } from "luxon";
import "./styles/AddTask.css";

export default function AddTask(props) {
  let dateValue = props.date || undefined;
  const [date, setDate] = useState(DateTime.fromISO(dateValue));
  const noModalRef = useRef();
  const datepickerRef = useRef();
  const cancelBtnRef = useRef();

  const nameRef = useRef();
  const descriptionRef = useRef();

  const hide = (event) => {
    if (
      event.target === noModalRef.current ||
      event.target === cancelBtnRef.current
    ) {
      event.preventDefault();
      props.hide();
    }
  };

  const addHandler = (event) => {
    event.preventDefault();
    props.addTask(
      nameRef.current.value,
      descriptionRef.current.value,
      date.toISODate()
    );
    props.hide();
  };

  return (
    <div className="add-task">
      <div
        className="add-task--full-screen add-task__wrapper"
        onClick={hide}
        ref={noModalRef}
      >
        <form action="" className="add-task__form">
          <legend>📋 New task</legend>
          <label htmlFor="task-name">🆎 Name</label>
          <input type="text" placeholder="Task name" ref={nameRef} />
          <label htmlFor="task-date-picker">📅 Date</label>
          <input
            type="date"
            id="task-date-picker"
            name="task date"
            onChange={() =>
              setDate(DateTime.fromISO(datepickerRef.current.value))
            }
            ref={datepickerRef}
          />
          <label htmlFor="task-description">📖 Description</label>
          <textarea
            name="task description"
            id="task-description"
            ref={descriptionRef}
          />
          {/* <p>{`La fecha seleccionada es: ${date.toISODate()}`}</p> */}
          <footer>
            <button className="add-task-btn incomplete" onClick={addHandler}>
              Add
            </button>
            <button className="add-task-btn remove" ref={cancelBtnRef}>
              Cancel
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
