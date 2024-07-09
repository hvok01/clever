import React from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc
} from "firebase/firestore";
import { firebaseConfig } from "../../Config/DBConfig";
import "./ContactForm.css";
import cartContext from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");
  const response = await addDoc(collectionRef, orderData);
  return response.id;
}

function ContactForm() {
  const [form, setForm] = React.useState({name: "", email: "", phone: ""});
  const [validForm, setValidForm] = React.useState(false);
  const { cart, clear, getTotalPrice } = React.useContext(cartContext);
  const navigateTo = useNavigate();

  React.useEffect(() => {
    setValidForm(Object.values(form).some(value => value === ''));
  },[form]);

  async function handleCheckout() {
    let total = getTotalPrice();
    const orderData = {
      buyer: form,
      items: cart,
      total: total,
      timestamp: new Date(),
    };
    //se puede guardar id.
    await createOrder(orderData);
    clear();
    navigateTo(`/thanks`);
  }

  const handleOnchangeForm = (event) => {
    let value = event.target.value;
    let formProp = event.target.id;
    let copyOfForm = {...form};
    copyOfForm[formProp] = value;
    setForm(copyOfForm);
  };

  const handleSendFormButton = () => {
    handleCheckout();
  };

  return (
    <div className="contactForm">
      <div className="contactFormHeader">
        <h1>fill out with your information</h1>
        <p>
          We'll send you the information within the next 1 hour.
        </p>
      </div>
      <div className="contactFormContainer">
        <div className="contactFormInput">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={handleOnchangeForm} maxLength={50}/>
        </div>
        <div className="contactFormInput">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" onChange={handleOnchangeForm} maxLength={80}/>
        </div>
        <div className="contactFormInput">
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" onChange={handleOnchangeForm} maxLength={80}/>
        </div>
      </div>
      <div className="contactFormSubmitButton">
        <button disabled={validForm} onClick={handleSendFormButton}>Finish</button>
      </div>
    </div>
  );
}

export default ContactForm;
