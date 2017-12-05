import * as React from "react";
import { connect } from "react-redux";
import { State } from "../store/store";
import { Feed } from "../components/feed/Feed";
import { fetchFeed } from "../actions/feedActions";

export const FeedContainer = connect(
  (state: State) => ({
    feed: state.feed
  }),
  (dispatch) => ({
    onFetchFeed() {
      dispatch(fetchFeed());
    }
  })
)(Feed);