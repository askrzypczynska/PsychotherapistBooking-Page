import React, { useState } from "react";
import "./Calendar.css";
import Formsection from "../FormSection/Formsection";

const HourComponent = ( props ) => {

  const [showForm, setShowForm] = useState(false);

  const handleCloseForm = () => {
    setShowForm(false);
  }


  return (
    <div>
      <div className={`hour ${!props.booked ? 'active' : 'busy'}`} onClick={!props.booked ? () => setShowForm(true) : undefined}>
        {props.visitHours}</div>
      {showForm && (
        <Formsection onClose={handleCloseForm}/>
      )}
    </div>

  )
}
  
  export default HourComponent;