import { FeedItem } from "./../store/store";
import { State } from "./../store/store";
import { ThunkAction } from "redux-thunk";

export const FETCH_FEED_REQUEST = "FETCH_FEED_REQUEST";
export const FETCH_FEED_SUCCESS = "FETCH_FEED_SUCCESS";

export type FetchFeedRequestAction = { type: typeof FETCH_FEED_REQUEST; }
export type FetchFeedSuccessAction = { type: typeof FETCH_FEED_SUCCESS; feed: FeedItem[]; }

export const fetchFeed = (): ThunkAction<void, State, void> => (
  async (dispatch) => {
    dispatch({ type: FETCH_FEED_REQUEST });

    const response = await fetch("https://www.reddit.com/r/programming.json");
    const json = await response.json();
    const feed: FeedItem[] = json.data.children;
    const fetchFeedSuccessAction: FetchFeedSuccessAction = { type: FETCH_FEED_SUCCESS, feed }
    dispatch(fetchFeedSuccessAction);
  }
)