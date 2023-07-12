import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BooksControllerProvider } from "./Contexts/BooksContext";
import "primereact/resources/themes/tailwind-light/theme.css";
//core
import "primereact/resources/primereact.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BooksControllerProvider>
      <App />
    </BooksControllerProvider>
  </React.StrictMode>
);
