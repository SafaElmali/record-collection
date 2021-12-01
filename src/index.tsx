import React from "react";
import ReactDOM from "react-dom";
import "./styles/normalize.css";
import GlobalStyles from "./styles/GlobalStyles";
import App from "./App";

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
