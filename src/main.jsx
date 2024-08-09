import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { TokenContext } from "./context/context.jsx";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TokenContext>
      <main className="max-w-[1350px] mx-auto">
        <App />
      </main>
    </TokenContext>
  </BrowserRouter>
);
