import {
  AddTweetActionInterface,
  FetchAddTweetActionInterface,
  FetchTweetsActionInterface,
  SetAddTweetFormActionInterface,
  SetTweetsActionInterface,
  SetTweetsLoadingStatusActionInterface,
  TweetsActionsType,
} from './contracts/actionTypes';
import { LoadingStatus } from '../../types';
import { AddFormState, Tweet, TweetsState } from './contracts/state';

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

export const setTweetsLoadingStatus = (
  payload: LoadingStatus,
): SetTweetsLoadingStatusActionInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export const fetchAddTweet = (payload: {
  text: string;
  images: string[];
}): FetchAddTweetActionInterface => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload,
});

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
});

export const setAddTweetForm = (payload: AddFormState): SetAddTweetFormActionInterface => ({
  type: TweetsActionsType.SET_ADD_FORM_STATE,
  payload,
});
