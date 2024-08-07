
import { createContext, useState } from "react";
const Context = createContext();

const TokenContext = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(window.localStorage.getItem("token")) || false
  );

  window.localStorage.setItem("token", JSON.stringify(token));

  return (
    <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>
  );
};

export { Context, TokenContext };
