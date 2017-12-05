import { compose } from "redux";

declare global {
  interface Window {
    // Injected by redux-devtools-extension if installed by browser
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}