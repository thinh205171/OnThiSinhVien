import React, { ReactElement } from "react";
import Router from "./router/routes.tsx";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(): ReactElement {
  return (
    <div>
      <React.StrictMode>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Router />
      </React.StrictMode>
    </div>
  );
}

export default App;
