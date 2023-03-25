import React from 'react';
import './CartWidget.css';
import { Cart16Regular } from '@fluentui/react-icons';
import cartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { cart, getCountInCart } = React.useContext(cartContext);
  const [cartTotal, setCartTotal]  = React.useState(0);

  React.useEffect(() => {
    setCartTotal(getCountInCart());
  }, [cart, getCountInCart]);

  return (
    <div className="CartWidget">
        <Cart16Regular />
        <Link to={"/checkout"}>
          <div className="CardWidgetCounter">
            {cartTotal}
          </div>
        </Link>
    </div>
  );
}

export default CartWidget;
