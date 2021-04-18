import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/Auth";

ReactDOM.render(
  <>
    <AuthProvider>
      <App />
    </AuthProvider>
  </>,
  document.getElementById("root")
);

reportWebVitals();
