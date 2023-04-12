import React, { useState } from "react";
import "./Calendar.css";
import WeekCalendar from "./WeekCalendar";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());

  //Poprzedni tydzień
  const handlePrevWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() - 7);
    setStartDate(newStartDate);
  };

  //Następny tydzień
  const handleNextWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() + 7);
    setStartDate(newStartDate);
  };

  return (
    <div>
        <div className="Calendar">
            <WeekCalendar startDate={startDate}/>
        </div>
        <div className="Nav">
          <div className="calendarNav" onClick={handlePrevWeek}><p>←</p></div>
          <div className="calendarNav" onClick={handleNextWeek}><p>→</p></div>
        </div>
    </div>
  )
}
  
export default Calendar;