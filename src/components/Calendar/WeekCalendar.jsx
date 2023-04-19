import React, { useState } from "react";
import "./Calendar.css";
import Daycomponent from "./Daycomponent";

function WeekCalendar({ startDate }) {

  // Zabukowane godziny na cały tydzień
  let bookedHours = [[1,0,0,0,0,0,1],[1,0,1,0,1,0,1],[1,1,1,1,1,1,1],[0,0,0,0,0,0,0],[0,1,1,1,1,1,0],[0,0,0,1,0,0,0]];


  const week = [];
  const date = new Date(startDate);
  const day = date.getDay(); 
  date.setDate(startDate.getDate() - day + 1); // ustaw na pierwszy poniedziałek przed datą początkową
  for (let i = 0; i < 6; i++) {
    week.push(new Date(date)); // dodaj kolejne daty
    date.setDate(date.getDate() + 1); // przejdź do kolejnego dnia
  }


  return (
    <div>
        <div className="Calendar">
          {week.map((date, i) => (
            <Daycomponent key={date.getTime()} date={date} booked={bookedHours[i]} />
          ))}
        </div>
    </div>
  )
}
  
export default WeekCalendar;
