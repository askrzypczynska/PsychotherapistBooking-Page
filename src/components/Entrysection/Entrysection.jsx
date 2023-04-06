import React from "react";
import "./Entrysection.css"
// import imgvector2 from 'img/imgvector2'

const Entrysection = () => {

    return (
      <div className="Entrysection">
        <div className="contentBox">
            <h1>Lorem ipsum dolor sit</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc convallis eros in mi lobortis, nec condimentum purus blandit. Sed in tortor risus. Nulla porttitor quis lorem ut pretium. Sed maximus ipsum massa, ut porta mauris luctus vel. Donec sit amet nisi erat. Curabitur efficitur nisl in odio sagittis, id elementum quam fermentum. Nunc convallis ante in ligula mattis lobortis. Etiam vel egestas ipsum. Aenean vel est nec sapien mollis luctus.</p>
            <div className="btnBox">
                <div className="btn">Sesje Indywidualne</div>
                <div className="btn">Sesje Grupowe</div>
            </div>
        </div>
        <div className="imgContainer">
            {/* <img src={''} alt="home"/> */}
        </div>
      </div>
    )
  }
  
  export default Entrysection