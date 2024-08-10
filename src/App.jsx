import React, { lazy, Suspense, useContext } from "react";
import "./App.css";
import { Context } from "./context/context";
import LoadingVideo from "./assets/images/loading.mp4";

const Login = lazy(
  () =>
    new Promise((resolve) => {
      return setTimeout(() => resolve(import("./routes/Login")));
    }, 1500)
);
const Dashboard = lazy(
  () =>
    new Promise((resolve) => {
      return setTimeout(() => resolve(import("./routes/Dashboard")));
    }, 1500)
);

function App() {
  const { token } = useContext(Context);
  return token ? (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex items-center justify-center ">
          <video autoPlay muted loop src={LoadingVideo}></video>
        </div>
      }
    >
      <Dashboard />
    </Suspense>
  ) : (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex items-center justify-center ">
          <video autoPlay muted loop src={LoadingVideo}></video>
        </div>
      }
    >
      <Login />
    </Suspense>
  );
}

export default App;
