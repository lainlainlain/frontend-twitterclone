import { Action } from "redux";
import { Tweet } from "../tweets/contracts/state";
import {
  FetchTweetActionInterface,
  SetTweetActionInterface,
  SetTweetLoadingStateActionInterface,
  TweetActionsType,
} from "./contracts/actionTypes";
import { LoadingState, TweetState } from "./contracts/state";

export const setTweetData = (
  payload: TweetState["data"]
): SetTweetActionInterface => ({
  type: TweetActionsType.SET_TWEET_DATA,
  payload,
});

export const setTweetLoadingState = (
  payload: LoadingState
): SetTweetLoadingStateActionInterface => ({
  type: TweetActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchTweet = (payload: string): FetchTweetActionInterface => ({
  type: TweetActionsType.FETCH_TWEET_DATA,
  payload,
});

export type TweetActions =
  | SetTweetActionInterface
  | FetchTweetActionInterface
  | SetTweetLoadingStateActionInterface;
