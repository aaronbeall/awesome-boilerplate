import * as React from "react";
import { StatelessComponent } from "react";
import { RouteComponentProps, Link, Route } from "react-router-dom";

type TopicsProps = RouteComponentProps<{}>;

export const Topics: StatelessComponent<TopicsProps> = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

type TopicRouteParams = { topicId: string; }

type TopicProps = RouteComponentProps<TopicRouteParams>;

const Topic: StatelessComponent<TopicProps> = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)