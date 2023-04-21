import React, { useState } from "react";
import "./Calendar.css";
import HourComponent from "./HourComponent";

function Daycomponent({ date, booked }) {

  const visitHours = ['9:30', '10:30', '11:30', '12:30', '13:30', '14:30', '15:30'];
  const visitHoursSaturday = visitHours.slice(0,-3)
  const dayName = date.toLocaleDateString('pl-PL', { weekday: 'long' })

  if(dayName !== "sobota"){
    return (
      <div className="Daycomponent ">
          <div className="Day">{dayName}
              <p>{date.toLocaleDateString('pl-PL')}</p>
          </div>
          {visitHours.map((hour, i) => {
              return(<HourComponent visitHours={hour} key={hour} booked={booked[i]} date={date} />)
            })
          }

      </div>
    )
  } else {
    return (
      <div className="Daycomponent ">
          <div className="Day">{dayName}
              <p>{date.toLocaleDateString('pl-PL')}</p>
          </div>
          {visitHoursSaturday.map((hour, i) => {
              return(<HourComponent visitHours={hour} key={hour} booked={booked[i]} date={date} />)
            })
          }

      </div>
    )
  }
}
  
export default Daycomponent;
