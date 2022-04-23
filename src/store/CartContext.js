import React, { createContext, useEffect, useState } from "react";
const CartContext = createContext(null);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(0);
    cart.forEach((item) => {
      setTotal(total + item.price);
    });
  }, [cart]);
  const values = {
    cart,
    setCart,
    total,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContext;
