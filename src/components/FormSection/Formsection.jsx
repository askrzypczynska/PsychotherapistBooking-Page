import React from "react";
import { FaTimes } from 'react-icons/fa'

function Formsection() {

    // const Form = ({ active }) => {
    //     const closeForm = () => {
    //         active(false)
    //     }
    //}

  return (
    <div className="Formsection ">
        <h1>Umów Wizytę</h1>
        <FaTimes/>
        <input type="text" placeholder="Imię" required></input>
        <input type="text" placeholder="Nazwisko" required></input>
        <input type="number" placeholder="Numer telefonu"></input>
        <input type="text" placeholder="Adres e-mail" required></input>
        <textarea type="text" placeholder="Dodatkowe informacje"></textarea>
        <span>W tym terminie nie możesz zarejestrować się na konsultację dla par.
            Aby zarejestrować termin dla pary, znajdź inny termin w kalendarzu po którym kolejna godzina (termin) będzie wolna. Jeśli nie możesz znaleść żadnego wolnego terminu w najbliższych 10 dniach to prosze o kontakt mailowy lub telefoniczny.
        </span>
        <input type="checkbox" class="statuteCheckbox" required></input><p>Psychoterapia dla Par (konsultacja)</p>

        <span>Zaznacz poniżej akceptację warunku rejestracji sesji.
            Jeśli nie anuluję/odwołam terminu sesji (dotyczy każdej sesji) sms-esem lub poprzez kliknięcie w link w mailu potwierdzającym rejestrację minimum 4 doby przed terminem sesji, zobowiązuję się do uiszczenia pełnej opłaty za sesję która się nie odbędzie bez względu na powód nieobecności na niej.
        </span>
        <input type="checkbox" class="statuteCheckbox" required></input><p>Psychoterapia dla Par (konsultacja)</p>

        <button>Zarejestruj</button>

    </div>
  )
}
  
export default Formsection

{/* <FaTimes onClick={closeForm} /> */}