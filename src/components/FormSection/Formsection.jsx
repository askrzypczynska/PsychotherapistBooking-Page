import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa'
import './Formsection.css'

function Formsection() {

  const validateForm = form => {
    if(!form.email) {
      return "E-mail jest wymagany"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email));
    {
      console.log("Błedny mail")
    }
    if(!form.firstName) {
      console.log("imie wymagane")

    } else if (form.firstName.length < 2){
      console.log("za krotkie imie")
    }
    return null;
  }

  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email:"",
    info: "",
    pair: "",
  });

  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = validateForm(form)
    if(errorMsg) {
      setError(errorMsg)
      console.log('blad')
      return
    }
    //wysłanie danych na serwer
    console.log(form)
  }

  return (
    <div className="Formsection">
      <div className="Form">
        <div className="headForm">
          <h1>Umów Wizytę</h1>
          <FaTimes className="FaTimes"/>
        </div>
        <input 
          type="text" 
          placeholder="Imię" 
          className="formInput"
          name="firstName"
          onChange={updateField}
          required 
        />
        <input 
          type="text" 
          placeholder="Nazwisko" 
          className="formInput"
          name="lastName"
          onChange={updateField}
          required 
        />
        <input 
          type="text" 
          placeholder="Numer telefonu" 
          className="formInput"
          name="phone"
          onChange={updateField}
          required 
        />
        <input 
          type="email" 
          placeholder="Adres e-mail" 
          className="formInput"
          name="email"
          onChange={updateField}
          required 
        />
        <textarea 
          type="text" 
          placeholder="Dodatkowe informacje"
          name="info"
          onChange={updateField}
        />
        <span>W tym terminie nie możesz zarejestrować się na konsultację dla par.
            Aby zarejestrować termin dla pary, znajdź inny termin w kalendarzu po którym kolejna godzina (termin) będzie wolna. Jeśli nie możesz znaleść żadnego wolnego terminu w najbliższych 10 dniach to prosze o kontakt mailowy lub telefoniczny.
        </span>
        <div className="formCheckbox">
          <input 
            type="checkbox" 
            className="statuteCheckbox" 
            name="pair"
            value={form.pair}
            onChange={updateField}
          />
          <p>Psychoterapia dla Par (konsultacja)</p>
        </div>
        <span><br />Zaznacz poniżej akceptację warunku rejestracji sesji.
            Jeśli nie anuluję/odwołam terminu sesji (dotyczy każdej sesji) sms-esem lub poprzez kliknięcie w link w mailu potwierdzającym rejestrację minimum 4 doby przed terminem sesji, zobowiązuję się do uiszczenia pełnej opłaty za sesję która się nie odbędzie bez względu na powód nieobecności na niej.
        </span>
        <div className="formCheckbox">
          <input type="checkbox" className="statuteCheckbox" required></input>
          <p>Akceptuje</p>
        </div>
        <button onClick={handleSubmit} className="formBtn">Zarejestruj</button>
      </div>

    </div>
  )
}
  
export default Formsection

{/* <FaTimes onClick={closeForm} /> */}