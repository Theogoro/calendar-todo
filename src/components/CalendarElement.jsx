import React from "react";

function CalendarElement(props) {
  const clickHandler = (event) => {};

  return (
    <div
      className={"day day-" + props.dayInWeek}
      style={props.styles}
      key={props.date.day}
      onClick={clickHandler}
      data-date={props.date.toISODate()}
    >
      <p className={"day-number " + (props.today ? "today" : "")}>
        {props.date.day}
      </p>

      {props.tasks.filter((e) => !e.status).length > 0 && (
        <div className="day-tasks" />
      )}
    </div>
  );
}

export default CalendarElement;
