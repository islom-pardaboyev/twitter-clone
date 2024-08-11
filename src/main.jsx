import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TokenContext } from "./context/context.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import LoadingVideo from "./assets/images/loading.mp4";

library.add(fas);

const App = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(import("./App.jsx"));
      }, 2000)
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TokenContext>
      <main className="dark:bg-black px-[100px]">
        <Suspense
          fallback={
            <div className="flex items-center justify-center w-screen h-screen">
              <video autoPlay muted loop  src={LoadingVideo}></video>
            </div>
          }
        >
          <App />
        </Suspense>
      </main>
    </TokenContext>
  </BrowserRouter>
);
