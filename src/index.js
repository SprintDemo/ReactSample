import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import App from "./App";
import DisplayData from "./DisplayData";
import ChangeState from "./ChangeState";
import StateProp from "./StateProp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App name="Pass propes value" />
    <Button />
    <DisplayData />
    <ChangeState />
    <StateProp />
  </React.StrictMode>,
  rootElement
);
