import React from "react";
import "./ContentCalendar.css";
import Calendar from "../Calendar/Calendar";

const ContentCalendar = () => {
  return (
    <div className="ContentCalendar">
      <div className="CalendarcontentBox">
        <h1>Cieszy mnie, że zainteresowałeś/aś się moją ofertą terapii.</h1>
        <p>Wierzę, że razem możemy pracować nad rozwiązaniem Twoich problemów i poprawą Twojego samopoczucia. Zapraszam Cię do skorzystania z kalendarza, który znajdziesz na mojej stronie, i wybrania dla siebie dogodnej daty i godziny spotkania. To prosty i szybki sposób na umówienie sesji terapeutycznej. Pamiętaj, że nie musisz radzić sobie z problemami emocjonalnymi sam/a. Terapia psychologiczna może być skutecznym sposobem na poprawę Twojego zdrowia psychicznego i jakości życia.</p>
        <h5>Nie czekaj, zapisz się na terapię już teraz i zacznij pracować na lepszą wersją samego/samej siebie!</h5>
      </div>
      <Calendar/>
    </div>
  )
}
  
  export default ContentCalendar;