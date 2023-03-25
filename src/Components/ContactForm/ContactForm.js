import React from "react";
import "./ContactForm.css";

function ContactForm() {
  const [form, setForm] = React.useState({name: "", email: "", phone: ""});
  const [validForm, setValidForm] = React.useState(false);

  React.useEffect(() => {
    setValidForm(Object.values(form).some(value => value === ''));
  },[form]);

  const handleOnchangeForm = (event) => {
    let value = event.target.value;
    let formProp = event.target.id;
    let copyOfForm = {...form};
    copyOfForm[formProp] = value;
    setForm(copyOfForm);
  };

  const handleSendFormButton = () => {
    alert("Se genero la orden!");
  };

  return (
    <div className="contactForm">
      <div className="contactFormHeader">
        <h1>Completa tus datos</h1>
        <p>
          Te enviaremos la informacion de envio a tu correo en las proximas
          24hs.
        </p>
      </div>
      <div className="contactFormContainer">
        <div className="contactFormInput">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" onChange={handleOnchangeForm} maxLength={50}/>
        </div>
        <div className="contactFormInput">
          <label htmlFor="email">Correo:</label>
          <input type="email" id="email" onChange={handleOnchangeForm} maxLength={80}/>
        </div>
        <div className="contactFormInput">
          <label htmlFor="phone">Telefono:</label>
          <input type="text" id="phone" onChange={handleOnchangeForm} maxLength={80}/>
        </div>
      </div>
      <div className="contactFormSubmitButton">
        <button disabled={validForm} onClick={handleSendFormButton}>Finalizar compra</button>
      </div>
    </div>
  );
}

export default ContactForm;
