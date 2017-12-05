import * as React from "react";
import { StatelessComponent } from "react";
import * as styles from "./Home.css";
import { RouteComponentProps } from "react-router-dom";

type HomeProps = RouteComponentProps<{}>;

export const Home: StatelessComponent<HomeProps> = () => (
  <div>
    <h2 className={ styles.title }>Home!</h2>
  </div>
);
