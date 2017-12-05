import { rootReducer } from "./../reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export interface State { // The state of the entire store
  count: number;
  feed: FeedItem[];
}

export interface FeedItem {
  data: {
    id: string;
    title: string;
    permalink: string;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Support for redux-devtools-extension

export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk) // Redux-Thunk allows for dispatching async functions as actions, used for API calls
));