import React from "react";
import "./Calendar.css";
import HourComponent from "./HourComponent";

function Daycomponent({ date }) {

  const visitHours = ['9:30', '10:30', '11:30', '12:30', '13:30', '14:30', '15:30'];

  return (
    <div className="Daycomponent ">
        <div>{date.toLocaleDateString('pl-PL', { weekday: 'long' })}
            <p>{date.toLocaleDateString('pl-PL')}</p>
        </div>
        <HourComponent visitHours={visitHours[0]}/>
        <HourComponent visitHours={visitHours[1]}/>
        <HourComponent visitHours={visitHours[2]}/>
        <HourComponent visitHours={visitHours[3]}/>
        <HourComponent visitHours={visitHours[4]}/>
        <HourComponent visitHours={visitHours[5]}/>
        <HourComponent visitHours={visitHours[6]}/>
    </div>
  )
}
  
export default Daycomponent;
