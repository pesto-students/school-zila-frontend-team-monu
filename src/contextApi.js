import React, { createContext, useState } from "react";
const TokenContext = createContext();

const TokenState = ({ children }) => {
  const [token, setToken] = useState("");
  return (
    <TokenContext.Provider value={{ token, setToken}}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenState, TokenContext };