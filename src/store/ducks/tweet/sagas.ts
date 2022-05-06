import { call, put, takeLatest } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { setTweet, setTweetLoadingState } from "./actionCreators";
import { LoadingState } from "./contracts/state";
import {
  FetchTweetActionInterface,
  TweetActionsType,
} from "./contracts/actionTypes";

export function* fetchTweetDataRequest({
  payload: tweetId,
}: FetchTweetActionInterface): any {
  try {
    const data = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweet(data[0]));
    console.log(data);
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}

export function* tweetSaga() {
  yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
}
