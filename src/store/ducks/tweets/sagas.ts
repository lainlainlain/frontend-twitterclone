import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { LoadingStatus } from '../../types';
import { addTweet, setAddTweetForm, setTweets, setTweetsLoadingStatus } from './actionCreators';
import {
  FetchAddTweetActionInterface,
  RemoveTweetActionInterface,
  TweetsActionsType,
} from './contracts/actionTypes';
import { AddFormState } from './contracts/state';

export function* fetchTweetsRequest(): any {
  try {
    const pathname = window.location.pathname;
    const userId = pathname.includes('/user') ? pathname.split('/').pop() : undefined;
    const items = yield call(TweetsApi.fetchTweets, userId);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* removeTweet({ payload }: RemoveTweetActionInterface): any {
  try {
    yield call(TweetsApi.removeTweet, payload);
  } catch (error) {
    yield put(setAddTweetForm(AddFormState.ERROR));
  }
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface): any {
  try {
    const item = yield call(TweetsApi.addTweet, payload);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setAddTweetForm(AddFormState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
  yield takeLatest(TweetsActionsType.REMOVE_TWEET, removeTweet);
}
