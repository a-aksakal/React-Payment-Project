import React, { createContext, useState } from "react";
const CartContext = createContext(null);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const values = {
    cart,
    setCart,
    total,
    setTotal,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContext;
