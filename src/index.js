import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

import App from "./App";
import DisplayData from "./DisplayData";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Button />
    <DisplayData />
  </React.StrictMode>,
  rootElement
);
