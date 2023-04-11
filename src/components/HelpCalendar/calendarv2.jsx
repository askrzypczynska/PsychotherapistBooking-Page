import React, { useState } from "react";
import './calendarv2.css'

const WeekCalendar = () => {
  const [date, setDate] = useState(new Date());

  const getWeekStart = (date) => {
    const dayOfWeek = date.getDay();
    const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  };

  const weekStart = getWeekStart(date);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);

  const days = [];
  let currentDay = new Date(weekStart);

  while (currentDay <= weekEnd) {
    days.push(new Date(currentDay));
    currentDay.setDate(currentDay.getDate() + 1);
  }

  return (
    <div className="WeekCalendar">
      <button onClick={() => setDate(new Date(date.setDate(date.getDate() - 7)))}>
        Poprzedni tydzień
      </button>
      <button onClick={() => setDate(new Date(date.setDate(date.getDate() + 7)))}>
        Następny tydzień
      </button>
      <table>
        <thead>
          <tr>
            {days.map((day) => (
              <th key={day.toISOString().slice(0, 10)}>{day.toLocaleDateString("pl-PL", { weekday: "long" })}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {days.map((day) => (
              <td key={day.toISOString().slice(0, 10)}>{day.toLocaleDateString("pl-PL")}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeekCalendar;