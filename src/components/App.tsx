import * as React from "react";
import { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Provider, StatelessComponent } from "react-redux";
import * as styles from "./App.css";
import { Home } from "./home/Home";
import { CounterContainer } from "../containers/CounterContainer";
import { store } from "../store/store";
import { Topics } from "./topics/Topics";
import { FeedContainer } from "../containers/FeedContainer";

export class App extends Component<{}, {}> {
  public render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <div className="global-main">
            <h1 className={ styles.title }>Aaron's Awesome Web Starter</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/counter">Counter (Redux Example)</Link></li>
              <li><Link to="/feed">Feed (Redux Thunk Async API Call Example)</Link></li>
              <li><Link to="/topics">Topics (Route Param Example)</Link></li>
            </ul>

            <hr/>

            <div className="other-global">
              <p className="thing">This uses global CSS, for compatibility with old non-module CSS.</p>
            </div>

            <main className={ styles.main }>
              <p className={ styles.info }>This uses CSS modules.</p>
              <Route exact path="/" component={ Home }/>
              <Route path="/counter" component={ CounterContainer }/>
              <Route path="/feed" component={ FeedContainer }/>
              <Route path="/topics" component={ Topics }/>
            </main>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}