import React from "react";
import "./Calendar.css";
import HourComponent from "./HourComponent";

const Daycomponent = () => {

  return (
    <div className="Daycomponent">
        <div>Poniedziałek 
            <p>10.04.2023</p>
        </div>
        <HourComponent/>
        <HourComponent/>
        <HourComponent/>
        <HourComponent/>
        <HourComponent/>
        <HourComponent/>
        <HourComponent/>
    </div>
  )
}
  
  export default Daycomponent;