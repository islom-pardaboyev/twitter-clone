import React, { useContext } from "react";
import "./App.css";
import { Context } from "./context/context";
import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";

function App() {
  const { token } = useContext(Context);
  return token ? <Dashboard /> : <Login />;
}

export default App;
