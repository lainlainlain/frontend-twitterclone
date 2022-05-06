import { Action } from "redux";
import {
  AddTweetActionInterface,
  FetchAddTweetActionInterface,
  FetchTweetsActionInterface,
  SetTweetsActionInterface,
  SetTweetsLoadingStateActionInterface,
  TweetsActionsType,
} from "./contracts/actionTypes";
import { LoadingState, Tweet, TweetsState } from "./contracts/state";

export const setTweets = (
  payload: TweetsState["items"]
): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

export const setTweetsLoadingState = (
  payload: LoadingState
): SetTweetsLoadingStateActionInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export const fetchAddTweet = (
  payload: string
): FetchAddTweetActionInterface => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload,
});

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
});

export type TweetsActions =
  | SetTweetsActionInterface
  | FetchTweetsActionInterface
  | SetTweetsLoadingStateActionInterface;
