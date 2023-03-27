import { createContext, useState } from "react";
// 1 Crear el context
// 2 Usar el context
// 3 Proveer el context

const cartContext = createContext({
  cart: [],
});

// 4 Crear un Custom Provider
function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addItem(product, count) {
    const newCart = [...cart];

    product.count = count;
    newCart.push(product);
    //newCart.push({...product,count});
    setCart(newCart);
    //setCart([...cart, product]);
  }

  function updateItem(id, title, newCount) {
    let copyOfCart = [...cart];
    copyOfCart.forEach((it) => {
      if(it.id === id && it.title === title) {
        it.count = newCount;
      }
    });
    setCart(copyOfCart);
  }

  function removeItem(id, title) {
    /* Quitar los items que tengan el id solicitado */
    let copyOfCart = [...cart];
    let elementFoundedIndex = copyOfCart.findIndex((it) => it.id === id && it.title === title);
    if(elementFoundedIndex >= 0) {
      const updatedCart = [...copyOfCart.slice(0, elementFoundedIndex), ...copyOfCart.slice(elementFoundedIndex + 1)];
      setCart(updatedCart);
    }
  }

  function clear() {
    /* Vaciar el carrito */
    setCart([]);
  }

  function getCountInCart() {
    /* reduce */
    let total = 0;
    cart.forEach((item) => {
      if(item.count) {
        total += item.count;
      }
    });
    return total;
  }

  function getTotalPrice() {
    /* reduce */
    let total = 0;
    cart.forEach((item) => {
      if(item.price) {
        total += (item.price * item.count);
      }
    });
    return total;
  }

  return (
    // 5 pasar la prop value
    <cartContext.Provider value={{ cart, addItem, updateItem, removeItem, clear, getCountInCart, getTotalPrice }}>
      {props.children}
    </cartContext.Provider>
  );
}

export { CartContextProvider };

export default cartContext;