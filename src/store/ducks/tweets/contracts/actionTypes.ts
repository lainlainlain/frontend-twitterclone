import { Action } from 'redux';
import { LoadingStatus } from '../../../types';
import { AddFormState, Tweet, TweetsState } from './state';

export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
  SET_ADD_FORM_STATE = 'tweets/SET_ADD_FORM_STATE',
  ADD_TWEET = 'tweets/ADD_TWEET',
  REMOVE_TWEET = 'tweets/REMOVE_TWEET',
  FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: TweetsState['items'];
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS;
}

export interface SetTweetsLoadingStatusActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_ADD_TWEET;
  payload: {
    text: string;
    images: string[];
  };
}

export interface AddTweetActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.ADD_TWEET;
  payload: Tweet;
}

export interface RemoveTweetActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.REMOVE_TWEET;
  payload: string;
}

export interface SetAddTweetFormActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_ADD_FORM_STATE;
  payload: AddFormState;
}

export type TweetsActions =
  | SetTweetsActionInterface
  | FetchTweetsActionInterface
  | SetTweetsLoadingStatusActionInterface
  | FetchAddTweetActionInterface
  | AddTweetActionInterface
  | SetAddTweetFormActionInterface
  | RemoveTweetActionInterface;
