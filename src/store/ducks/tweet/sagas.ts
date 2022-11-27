import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { setTweetData, setTweetLoadingStatus } from './actionCreators';
import { LoadingStatus } from '../../types';

import { FetchTweetActionInterface, TweetActionsType } from './contracts/actionTypes';
import { Tweet } from '../tweets/contracts/state';

export function* fetchTweetDataRequest({ payload: tweetId }: FetchTweetActionInterface): any {
  try {
    const data: Tweet = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweetData(data));
    console.log(data);
  } catch (error) {
    yield put(setTweetLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* tweetSaga() {
  yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
}
