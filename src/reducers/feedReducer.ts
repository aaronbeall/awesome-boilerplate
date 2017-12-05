import { FeedItem } from "./../store/store";
import { FetchFeedRequestAction, FetchFeedSuccessAction, FETCH_FEED_REQUEST, FETCH_FEED_SUCCESS } from "./../actions/feedActions";

type FeedActions = FetchFeedRequestAction | FetchFeedSuccessAction;

export const feedReducer = (state: FeedItem[] = [], action: FeedActions): FeedItem[] => {
  switch (action.type) {
    case FETCH_FEED_REQUEST:
      return [];
    case FETCH_FEED_SUCCESS:
      return action.feed;
    default:
      const _exaustive: never = action;
      return state;
  }
}