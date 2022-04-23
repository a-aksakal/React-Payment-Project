import React, { createContext, useState } from "react";
const LoginContext = createContext(null);
export const LoginProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const values = {
    name,
    setName,
    mail,
    setMail,
  };
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

export default LoginContext;
