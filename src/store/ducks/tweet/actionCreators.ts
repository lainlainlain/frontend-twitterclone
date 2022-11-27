import { Action } from 'redux';
import { LoadingStatus } from '../../types';
import { Tweet } from '../tweets/contracts/state';
import {
  FetchTweetActionInterface,
  SetTweetActionInterface,
  SetTweetLoadingStatusActionInterface,
  TweetActionsType,
} from './contracts/actionTypes';
import { TweetState } from './contracts/state';

export const setTweetData = (payload: TweetState['data']): SetTweetActionInterface => ({
  type: TweetActionsType.SET_TWEET_DATA,
  payload,
});

export const setTweetLoadingStatus = (
  payload: LoadingStatus,
): SetTweetLoadingStatusActionInterface => ({
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
  | SetTweetLoadingStatusActionInterface;
