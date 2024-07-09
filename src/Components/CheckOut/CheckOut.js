import React from "react";
import cartContext from "../../Context/CartContext";
import "./CheckOut.css";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm/ContactForm";

function CheckOut() {
    const [totalPrice, setTotalPrice] = React.useState(0);
  const { removeItem, clear, cart, getTotalPrice } = React.useContext(cartContext);

  React.useEffect(() => {
    setTotalPrice(getTotalPrice());
  },[getTotalPrice]);

  return (
    <div className="checkout">
      {cart.length > 0 ? (
        <div className="checkoutInfo">
            <h1 className="checkoutMainTitle">Finish your shopping.</h1>
            <p className="checkoutSubtititle">You can remove items if you change your mind!</p>
            {
                cart.map((item, key) => {
                    return (
                        <div key={key} className="checkoutItem">
                            <div className="checkoutItemTitle">
                                <div className="checkoutItemImage">
                                    <img src={item.imageUrl} alt={item.title} />
                                </div>
                            </div>
                            <div className="checkoutItemDetail">
                                <p>
                                    Product: {item.title}
                                </p>
                                <p>
                                    Details: {item.detail}
                                </p>
                                <p>
                                    Amount: {item.count}
                                </p>
                                <div className="removeItemCheckout">
                                    <button onClick={() => removeItem(item.id, item.title)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <h1>
                total cost: $
                { totalPrice }
            </h1>
            <ContactForm />
            <div className="clearCheckout">
                <p>Empty your cart from here:</p>
                <button onClick={clear}>
                    Empty cart.
                </button>
            </div>
        </div>
      ) : (
        <div className="checkoutEmpty">
          <h1>There's no elements on the cart:</h1>
          <Link to={"/"}>Start shopping clicking here!</Link>
        </div>
      )}
    </div>
  );
}

export default CheckOut;
