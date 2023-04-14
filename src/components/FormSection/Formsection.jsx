import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa'
import './Formsection.css'

function Formsection(props) {

  const validateForm = form => {
    const errors = {};

    if(!form.email) {
      errors.email = true;
    } 
    
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      errors.email = true;    
    }

    if(!form.firstName) {
      errors.firstName = true;
    }
    if(!form.lastName) {
      errors.lastName = true;
    }
    if(!/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i.test(form.phone)) {
      errors.phone = true;
    } else if(!form.phone.length !==9 ) {
      errors.phone = true;
    }

    return errors;
  }

  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email:"",
    info: "",
    pair: "",
  });

  const updateField = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });

    if (value && errors[name]){
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: false
      }))
    }
  };
  



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm(form)

    if(Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      console.log("Błędne dane");
      console.log(formErrors)
      return;
    }
    //wysłanie danych na serwer
    console.log("Wysłane dane", form)
  }

  return (
    <div className="Formsection">
      <div className="Form">
        <div className="headForm">
          <h1>Umów Wizytę</h1>
          <FaTimes className="FaTimes" onClick={props.onClose}/>
        </div>
        <input 
          type="text" 
          placeholder="Imię" 
          className={errors.firstName ? "formInput error" : "formInput"}
          name="firstName"
          onChange={updateField}
          required 
        />
        <input 
          type="text" 
          placeholder="Nazwisko" 
          className={errors.lastName ? "formInput error" : "formInput"}
          name="lastName"
          onChange={updateField}
          required 
        />
        <input 
          type="text" 
          placeholder="Numer telefonu" 
          className={errors.phone ? "formInput error" : "formInput"}
          name="phone"
          onChange={updateField}
          required 
        />
        <input 
          type="text" 
          placeholder="Adres e-mail" 
          className={errors.email ? "formInput error" : "formInput"}
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
