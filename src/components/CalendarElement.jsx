import React, { useState, useRef } from "react";
import AddTask from "./AddTask";

function CalendarElement(props) {
  const calendarElemetRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

  const hideAddModal = () => {
    setShowModal(false);
    console.log("hideAddModal", showModal);
  };

  const showAddModal = (event) => {
    if (event.target === calendarElemetRef.current) {
      setShowModal(true);
    }
  };

  return (
    <div
      className={"day day-" + props.dayInWeek}
      style={props.styles}
      key={props.date.day}
      onClick={showAddModal}
      ref={calendarElemetRef}
    >
      <p className={"day-number " + (props.today ? "today" : "")}>
        {props.date.day}
      </p>

      {props.tasks.filter((e) => !e.status).length > 0 && (
        <div className="day-tasks" />
      )}
      {showModal && (
        <AddTask
          hide={hideAddModal}
          date={props.date.toISODate()}
          addTask={props.addHandler}
        />
      )}
    </div>
  );
}

export default CalendarElement;
