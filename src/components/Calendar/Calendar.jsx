import React, { useState } from "react";
import "./Calendar.css";
import WeekCalendar from "./WeekCalendar";

let weekIndex = 0;

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());

  //Poprzedni tydzień
  const handlePrevWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() - 7);
    if(weekIndex > 0){
      setStartDate(newStartDate);
      weekIndex--
    }
  };

  //Następny tydzień
  const handleNextWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() + 7);
    if(weekIndex < 5){
      setStartDate(newStartDate);
      weekIndex++
    }
  };

  return (
    <div>
        <div className="Calendar">
            <WeekCalendar startDate={startDate}/>
        </div>
        <div className="Nav">
          <div className={`calendarNav ${(weekIndex <= 0)? 'unclickable' : ""}`} onClick={handlePrevWeek}><p>←</p></div>
          <div className={`calendarNav ${(weekIndex >= 5)? 'unclickable' : ""}`} onClick={handleNextWeek}><p>→</p></div>
        </div>
    </div>
  )
}
  
export default Calendar;