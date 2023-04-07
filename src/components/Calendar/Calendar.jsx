import React from "react";
import "./Calendar.css";
import Daycomponent from "./Daycomponent";



const Calendar = () => {

  return (
    <div>
        <div className="calendarNav"><i class="fa-solid fa-arrow-right"></i></div>
        <div className="Calendar">
            <Daycomponent />
            <Daycomponent />
            <Daycomponent />
            <Daycomponent />
            <Daycomponent />
            <Daycomponent />
        </div>
        <div className="calendarNav">prawo</div>
    </div>
  )
}
  
  export default Calendar;