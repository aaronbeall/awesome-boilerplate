import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { StatelessComponent, Component } from "react";
import { FeedItem } from "../../store/store";

interface FeedProps extends RouteComponentProps<{}> {
  onFetchFeed(): void;
  feed: FeedItem[];
}

export class Feed extends Component<FeedProps, {}> {
  componentDidMount() {
    this.props.onFetchFeed();
  }
  render() {
    const { feed } = this.props;
    return (
      <ul>
        { feed.map(item => <li key={ item.data.id }><a href={ `https://reddit.com/${item.data.permalink}` } target="blank">{ item.data.title }</a></li>) }
      </ul>
    );
  }
}