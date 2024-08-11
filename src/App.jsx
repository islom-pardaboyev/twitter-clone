import React, { useContext } from "react";
import "./App.css";
import { Context } from "./context/context";
import DashboardPage from "./routes/Dashboard";
import LoginPage from "./routes/Login";

function App() {
  const { token } = useContext(Context);
  return token ? <DashboardPage /> : <LoginPage />;
}

export default App;
