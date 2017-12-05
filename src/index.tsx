import "core-js"; // Polyfill for modern JS in older browsers
import "whatwg-fetch"; // Polyfill for DOM FetchAPI in older browsers (IE)
import "bootstrap/dist/css/bootstrap.css"; // Load global bootstrap CSS library
import "./styles/global.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";

console.log(`%cEnvironment: ${process.env.NODE_ENV}`, `font-size: large; color: ${process.env.NODE_ENV == "production" ? "green" : "blue"};`);
if (process.env.NODE_ENV == "development") {
  console.log("This message only shows in development, and the code is removed completely from production builds.");
}

ReactDOM.render(
  <App />,
  document.querySelector("#root"),
);
