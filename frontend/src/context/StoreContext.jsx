import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
   const [cartItems, setCartItems] = useState({});

   const addToCart = (itemId) => {
      if (!cartItems[itemId]) {
         setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      } else {
         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      }
   };

   const removeFromCart = (itemId) => {
      setCartItems((prev) => {
         if (prev[itemId] === 1) {
            const updatedCart = { ...prev };
            delete updatedCart[itemId];
            return updatedCart;
         } else {
            return { ...prev, [itemId]: prev[itemId] - 1 };
         }
      });
   };

   useEffect(() => {
      console.log(" Cart Updated:", cartItems);
   }, [cartItems]);

   const contextValue = {
      food_list,
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart,
   };

   return (
      <StoreContext.Provider value={contextValue}>
         {props.children}
      </StoreContext.Provider>
   );
};

export default StoreContextProvider;
