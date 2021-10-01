import React, { useState, useContext } from "react";
import { hoodies, shirts } from "data/users";
import PopUpWindow from "components/molecules/PopUpWindow/PopUpWindow";

export const StoreContext = React.createContext({
  isShow: false,
  popUp: false,
  cart: [],
  sizes: [],
  subTotal: 0,
  setPopUp: () => {},
  handleAddToCart: () => {},
  setIsShow: () => {},
  removeFromCart: () => {},
  showPopUp: () => {},
  setSubTotal: () => {},
  addToSizes: () => {},
  addToCart: () => {},
  hoodies: [],
  shirts: [],
  cleanButtons: false,
  setCleanButtons: () => {},
});

const StoreProvider = ({ children }) => {
  const [isShow, setIsShow] = React.useState(false);
  const [cart, addToCart] = React.useState([]);
  const [popUp, setPopUp] = React.useState(false);
  const [subTotal, setSubTotal] = React.useState(0);
  const [sizes, addToSizes] = React.useState([]);
  const [cleanButtons, setCleanButtons] = React.useState(false);

  const handleAddToCart = (product, size) => {
    if (!cart.includes(product)) {
      product.quantity = 1;
      product.itemtotal = product.price;
      product.size = size;
      addToCart([product, ...cart]);
    } else {
      product.quantity++;
      product.itemtotal = product.price * product.quantity;
      product.size = size;
    }
    setPopUp(true);
  };

  const showPopUp = () => {
    return <PopUpWindow />;
  };

  const hidePopUp = () => {
    setTimeout(setPopUp(false), 1000);
  };

  const removeFromCart = (productData) => {
    const products = cart.filter((product) => product.id !== productData);
    addToCart(products);
  };
  //console.log(cart)
  return (
    <StoreContext.Provider
      value={{
        isShow,
        popUp,
        cart,
        sizes,
        setPopUp,
        setIsShow,
        removeFromCart,
        subTotal,
        handleAddToCart,
        showPopUp,
        setSubTotal,
        addToCart,
        addToSizes,
        hoodies,
        shirts,
        cleanButtons,
        setCleanButtons,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreProvider;
