import React, { useState, useContext } from "react";
import { hoodies, shirts } from "data/users";
import PopUpWindow from "components/molecules/PopUpWindow/PopUpWindow";
import { v4 as uuidv4 } from "uuid";

export const StoreContext = React.createContext({
  isShow: false,
  popUp: false,
  cart: [],
  sizes: [],
  subTotal: 0,
  popUpResponse: 0,
  setPopUp: () => {},
  setPopUpResponse: () => {},
  handleAddToCart: () => {},
  setIsShow: () => {},
  removeFromCart: () => {},
  setSubTotal: () => {},
  addToSizes: () => {},
  addToCart: () => {},
  hoodies: [],
  setButtonsToDisable: () => {},
  buttonsToDisable: [],
  shirts: [],
  cleanButtons: false,
  setCleanButtons: () => {},
});

const StoreProvider = ({ children }) => {
  const [isShow, setIsShow] = React.useState(false);
  const [cart, addToCart] = React.useState([]);
  const [popUp, setPopUp] = React.useState([false, true]);
  const [subTotal, setSubTotal] = React.useState(0);
  const [sizes, addToSizes] = React.useState([]);
  const [cleanButtons, setCleanButtons] = React.useState(false);
  const [popUpResponse, setPopUpResponse] = React.useState("");
  const [buttonsToDisable, setButtonsToDisable] = React.useState([]);

  const handleAddToCart = (product, givenSize, key) => {
    if (!cart.find((item) => item.id == product.id)) {
      product.key = key;
      product.quantity = 1;
      product.key = key;
      product.itemtotal = product.price;
      product.size = givenSize;
      product.instance = 1;
      addToCart([...cart, product]);

      //alert(cart.indexOf(product));
    } else if (cart.find((item) => item.id == product.id)) {
      const index = cart.indexOf(product);

      if (cart[index].size == givenSize) {
        product.quantity++;
        product.instance++;
        product.itemtotal = product.price * product.quantity;
      } else if (cart[index].size != givenSize) {
        const newProduct = { ...product };
        newProduct.instance = 2;
        newProduct.quantity = 1;
        newProduct.itemtotal = product.price;
        newProduct.size = givenSize;
        newProduct.key = uuidv4();

        addToCart([...cart, newProduct]);
      }
      console.log(cart);
    }
  };

  const hidePopUp = () => {
    setTimeout(setPopUp(false), 1000);
  };

  const removeFromCart = (productData) => {
    const products = cart.filter((product) => product.key !== productData);
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
