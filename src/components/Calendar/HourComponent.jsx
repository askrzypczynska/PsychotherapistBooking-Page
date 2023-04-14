import React, { useState } from "react";
import "./Calendar.css";
import Formsection from "../FormSection/Formsection";

const HourComponent = (props) => {

  const [showForm, setShowForm] = useState(false);
  const [active, setActive] = useState(true);

  const handleCloseForm = () => {
    setShowForm(false);
  }

  const toggleActive = () => {
    setActive(!active);
  }


  return (
    <div>
      <div className={`hour ${active ? 'active' : 'busy'}`} onClick={active ? () => setShowForm(true) : undefined}>
        {props.visitHours}</div>
      {showForm && (
        <Formsection onClose={handleCloseForm}/>
      )}
    </div>

  )
}
  
  export default HourComponent;