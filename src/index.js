import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import "./styles/index.css";
import "./styles/Header.css";
import "./styles/InputField.css";
import "./styles/List.css";
import "./styles/ListItem.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
