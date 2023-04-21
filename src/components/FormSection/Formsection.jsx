import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa'
import './Formsection.css'

function Formsection(props) {

  const validateForm = form => {
    const errors = {};
    const nameRegex = /^[a-zA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ]+$/;
    
    if (!form.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      errors.email = true;    
    }

    if(!form.firstName || !nameRegex.test(form.firstName)) {
      errors.firstName = true;
    }
    if(!form.lastName || !nameRegex.test(form.lastName)) {
      errors.lastName = true;
    }
    if(!/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i.test(form.phone) || form.phone.length !== 9) {
      errors.phone = true;
    }
    if(!form.accept){
      errors.accept = true;
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
    accept: false,
    //Data i godzina podpiąć
    date: props.date.toLocaleDateString('pl-PL'),
    hour: props.visitHours
  });

  const updateField = e => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setForm({
      ...form,
      [name]: newValue
    });

    if (newValue && errors[name]){
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
      return;
    }
    //wysłanie danych na serwer
    props.updateButtonClass('busy');
    console.log("Wysłane dane", form)
    props.onClose()
    
    console.log(form.date)
    console.log(form.hour)

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
          <input 
            type="checkbox" 
            className={errors.accept ? "statuteCheckbox errorCheck" : "statuteCheckbox"}
            name="accept"
            checked={form.accept} 
            onChange={updateField}
          >
          </input>
          <p>Akceptuje</p>
        </div>
        <button onClick={handleSubmit} className="formBtn">Zarejestruj</button>
      </div>

    </div>
  )

}
  
export default Formsection
