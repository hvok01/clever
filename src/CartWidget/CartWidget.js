import './CartWidget.css';
import { Cart16Regular } from '@fluentui/react-icons';

function CartWidget() {
  return (
    <div className="CartWidget">
        <Cart16Regular />
        <div className="CardWidgetCounter">
          2
        </div>
    </div>
  );
}

export default CartWidget;
