import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { TokenContext } from "./context/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TokenContext>
      <main className="container mx-auto">
        <App />
      </main>
    </TokenContext>
  </BrowserRouter>
);
