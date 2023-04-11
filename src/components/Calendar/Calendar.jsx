import React, { useState } from "react";
import "./Calendar.css";
import Daycomponent from "./Daycomponent";



const Calendar = () => {
  const [week, setWeek] = useState();

  const calendarDay = ['Poniedziałe', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']

  const todayDate = new Date();

  //Zmiana formatu zapisu miesiąca i dnia w przypadku gdy jest to jedna cyfra 
  const month = String(todayDate.getMonth()+1).padStart(2,'0');
  const day = String(todayDate.getDate()).padStart(2, '0');

  const calendarDate = `${day}.${month}.${todayDate.getFullYear()}`;

  //Zmiana wyświetlanego tygodnia
  const nextWeekHandler = () => {
    console.log('nasteony tydzien')
  }
  const previousWeekHandler = () => {
    console.log('poprzedni tydzien')
  }
  return (
    <div>
        <div className="Calendar">
            <Daycomponent calendarDay={calendarDay[0]} calendarDate={calendarDate}/>
            <Daycomponent calendarDay={calendarDay[1]} calendarDate={calendarDate}/>
            <Daycomponent calendarDay={calendarDay[2]} calendarDate={calendarDate}/>
            <Daycomponent calendarDay={calendarDay[3]} calendarDate={calendarDate}/>
            <Daycomponent calendarDay={calendarDay[4]} calendarDate={calendarDate}/>
            <Daycomponent calendarDay={calendarDay[5]} calendarDate={calendarDate}/>
        </div>
        <div className="Nav">
          <div className="calendarNav" onClick={() => setDate(new Date(date.setDate(date.getDate() - 7)))}><p>←</p></div>
          <div className="calendarNav" onClick={() => setDate(new Date(date.setDate(date.getDate() + 7)))}><p>→</p></div>
        </div>
    </div>
  )
}
  
  export default Calendar;