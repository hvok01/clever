import React from "react";
import cartContext from "../../Context/CartContext";
import "./ItemDetail.css";
import { Link } from 'react-router-dom';

const stock = 10;

function ItemDetail({ item }) {
  const [counterValue, setCounterValue] = React.useState(0);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const { addItem, updateItem, cart } = React.useContext(cartContext);

  React.useEffect(() => {
    if(success && success.length > 0) {
      setTimeout(() => {
        setSuccess("");
      }, 3000);
    }
  },[success]);

  const addToCart = (counterValue, item) => {
    setSuccess(`You added: ${counterValue} ${item.title} to the cart.`)
    let itemAlreadyExistInCart = cart.some(
      (it) => it.title === item.title && it.id === item.id
    );

    if (itemAlreadyExistInCart) {
      let copyOfCart = cart.filter((it) => it.title === item.title)[0];
      let beforeCount = copyOfCart.count;
      updateItem(item.id, item.title, beforeCount + counterValue);
    } else {
      addItem(item, counterValue);
    }
  };

  const handleInputOnchange = (e) => {
    e.preventDefault();
    if (e.target.value <= stock) {
      setError("");
      setCounterValue(Number(e.target.value));
    } else {
      setError("that amount is off the stock");
      setCounterValue(Number(e.target.value));
    }
  };

  const handleCounterValue = (increse) => {
    if (increse) {
      setCounterValue(counterValue + 1);
    } else {
      setCounterValue(counterValue - 1);
    }
    if (counterValue <= stock && error.length > 0) {
      setError("");
    }
  };

  return (
    <div className="Item">
      <div className="ItemImageContainer">
        <img src={item.imageUrl} alt={item.title} />
      </div>
      <div className="ItemDetail">
        <div className="ItemInfoContainer">
          <span>
            <h1>{item.title}</h1>
          </span>
          <p>{item.detail}</p>
          <p>price: ${item.price}</p>
        </div>
        <div className="ItemAddToCartContainer">
          <div className="ItemDetailActionsContainer">
            <button
              onClick={() => handleCounterValue(false)}
              disabled={counterValue < 1}
            >
              -
            </button>
            <input
              type="number"
              name=""
              id=""
              value={counterValue}
              onChange={(e) => handleInputOnchange(e)}
            />
            <button
              onClick={() => handleCounterValue(true)}
              disabled={counterValue >= stock}
            >
              +
            </button>
          </div>
          <div className="ItemDetailAddToCartContainer">
            <button
              onClick={() => addToCart(counterValue, item)}
              disabled={error.length > 0 || counterValue === 0}
            >
              Add to cart
            </button>
          </div>
          <span>{error ? <div>{error}</div> : null}</span>
          <span>{success? <div>{success}</div> : null}</span>
        </div>
        {cart && cart.length > 0 ? (
          <div className="gotToCheckOutPageContainer">
            <Link to={"/checkout"}>Finish</Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ItemDetail;
