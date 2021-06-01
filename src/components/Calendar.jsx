import { DateTime } from "luxon";
import React, { useState } from "react";
import CalendarElement from "./CalendarElement";
import "./styles/Calendar.css";

function Calendar(props) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const [date, setDate] = useState(
    DateTime.fromObject({
      year: DateTime.now().year,
      month: DateTime.now().month,
      day: 1,
    })
  );

  const addMonth = () => {
    setDate(date.plus({ months: 1 }));
  };

  const subtractMonth = () => {
    setDate(date.minus({ months: 1 }));
  };

  return (
    <div className="calendar">
      <header className="calendar-header">
        <button className="tooltip" onClick={subtractMonth}>
          {"<"}
          <div className="tooltiptext">Last Month</div>
        </button>
        <p className="calendar-month">{month[date.month - 1]}</p>
        <button className="tooltip" onClick={addMonth}>
          {">"}
          <div className="tooltiptext">Next Month</div>
        </button>
        <p className="calendar-year">{date.year}</p>
      </header>
      <div className="days-name__wrapper">
        {daysNames.map((e, index) => (
          <p className="day-name" key={index}>
            {e}
          </p>
        ))}
      </div>
      <div className="days__wrapper">
        {Array(date.daysInMonth)
          .fill()
          .map((e, index) => {
            let styles = {};

            if (index === 0) {
              styles = {
                gridColumnStart: date.weekday,
              };
            }

            const dayDate = DateTime.fromObject({
              year: date.year,
              month: date.month,
              day: index + 1,
            });

            return (
              <CalendarElement
                key={index}
                styles={styles}
                date={dayDate}
                dayInWeek={dayDate.weekday}
                today={
                  dayDate.year === DateTime.now().year &&
                  dayDate.month === DateTime.now().month &&
                  dayDate.day === DateTime.now().day
                }
                tasks={props.tasks.filter(
                  (task) => dayDate.toISODate() === task.date.toISODate()
                )}
                addHandler={props.tasksManager.addTask}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Calendar;
