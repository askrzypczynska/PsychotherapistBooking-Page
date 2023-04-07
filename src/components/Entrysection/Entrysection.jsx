import React from "react";
import "./Entrysection.css";
import "../../img/imgvector2.png"

const Entrysection = () => {

    return (
      <div className="Entrysection">
        <div className="contentBox">
            <h1>Potrzebujesz pomocy, wsparcia?</h1>
            <p> Jestem psychologiem i oferuję pomoc osobom, które doświadczają trudności emocjonalnych i potrzebują wsparcia w rozwiązywaniu swoich problemów. Na mojej stronie znajdziesz informacje o terapii indywidualnej i grupowej oraz o tym, jakie korzyści przynosi każda z tych form pomocy.</p>
            <div className="btnBox">
                <div className="btn">Sesje Indywidualne</div>
                <div className="btn">Sesje Grupowe</div>
            </div>

            
        </div>
        <div className="imgContainer">
          <img src={require("../../img/imgvector2.png")} alt="Drawing of a psychological office"/>
        </div>
      </div>
    )
  }
  
  export default Entrysection