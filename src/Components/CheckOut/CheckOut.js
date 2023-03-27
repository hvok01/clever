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
            <h1 className="checkoutMainTitle">Finaliza tu compra.</h1>
            <p className="checkoutSubtititle">Tambien podes remover elementos de tu carrito si ya no lo queres!</p>
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
                                    Producto: {item.title}
                                </p>
                                <p>
                                    Detalle del producto: {item.detail}
                                </p>
                                <p>
                                    Cantidad: {item.count}
                                </p>
                                <div className="removeItemCheckout">
                                    <button onClick={() => removeItem(item.id, item.title)}>Remover</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <h1>
                Costo total: $
                { totalPrice }
            </h1>
            <ContactForm />
            <div className="clearCheckout">
                <p>Te arrepentiste de tu compra?. podes vaciar tu carrito desde aca:</p>
                <button onClick={clear}>
                    Vaciar carrito.
                </button>
            </div>
        </div>
      ) : (
        <div className="checkoutEmpty">
          <h1>No hay elementos en el carrito:</h1>
          <Link to={"/"}>Empeza a comprar haciendo click aca</Link>
        </div>
      )}
    </div>
  );
}

export default CheckOut;
