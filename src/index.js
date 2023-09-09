import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BooksControllerProvider } from "./Contexts/BooksContext";
import "primereact/resources/themes/tailwind-light/theme.css";
//core
import "primereact/resources/primereact.min.css";
import { AuthContextProvider } from "./Contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <BooksControllerProvider>
      <App />
    </BooksControllerProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
