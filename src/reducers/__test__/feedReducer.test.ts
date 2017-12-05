import { FetchFeedSuccessAction, FETCH_FEED_SUCCESS } from "./../../actions/feedActions";
import { feedReducer } from "./../feedReducer";
import { FetchFeedRequestAction, FETCH_FEED_REQUEST } from "../../actions/feedActions";
import { FeedItem } from '../../store/store';

describe("feedReducer", () => {
  it("should reset feed on request", () => {
    const action: FetchFeedRequestAction = { type: FETCH_FEED_REQUEST }
    const before: FeedItem[] = [{} as FeedItem];
    const after = feedReducer(before, action);
    expect(after).toEqual([]);
  });
  it("should populate feed on success", () => {
    const feed: FeedItem[] = [{ data: { id: "0", title: "foo", permalink: "..." }}];
    const action: FetchFeedSuccessAction = { type: FETCH_FEED_SUCCESS, feed }
    const before: FeedItem[] = [{} as FeedItem];
    const after = feedReducer(before, action);
    expect(after).toEqual(feed);
  });
});