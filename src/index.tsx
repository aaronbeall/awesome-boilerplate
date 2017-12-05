import "core-js"; // Polyfill for modern JS in older browsers
import "whatwg-fetch"; // Polyfill for DOM FetchAPI in older browsers (IE)
import "bootstrap/dist/css/bootstrap.css"; // Load global bootstrap CSS library
import "./styles/global.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";

console.log("Environment:", process.env.NODE_ENV);

ReactDOM.render(
  <App />,
  document.querySelector("#root"),
);
