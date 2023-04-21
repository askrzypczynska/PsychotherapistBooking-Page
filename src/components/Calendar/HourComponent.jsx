import React, { useState } from "react";
import "./Calendar.css";
import Formsection from "../FormSection/Formsection";

const HourComponent = ( props ) => {

  const [showForm, setShowForm] = useState(false);
  const [buttonClass, setButtonClass] = useState(!props.booked ? 'active' : 'busy');

  const handleCloseForm = () => {
    setShowForm(false);
  }

  //Zmiana aktywnych godzin
  const updateButtonClass = (className) => {
    setButtonClass(className)
  }


  return (
    <div>
      <div className={`hour ${buttonClass}`} onClick={!props.booked ? () => setShowForm(true) : undefined}>
        {props.visitHours}</div>
      {showForm && (
        <Formsection onClose={handleCloseForm} date={props.date} visitHours={props.visitHours} updateButtonClass={updateButtonClass}/>
      )}
    </div>

  )
}
  
  export default HourComponent;