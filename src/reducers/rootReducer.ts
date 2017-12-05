import { counterReducer as count } from "./counterReducer";
import { feedReducer as feed } from "./feedReducer";
import { combineReducers } from "redux";
import { State } from "../store/store";

export const rootReducer = combineReducers<State>({
  count,
  feed
})