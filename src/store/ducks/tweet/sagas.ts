import { call, put, takeLatest } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { setTweet, setTweetLoadingState } from "./actionCreators";
import { LoadingState } from "./contracts/state";
import {
  FetchTweetActionInterface,
  TweetActionsType,
} from "./contracts/actionTypes";
import { Tweet } from "../tweets/contracts/state";

export function* fetchTweetDataRequest({
  payload: tweetId,
}: FetchTweetActionInterface): any {
  try {
    const data: Tweet = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweet(data));
    console.log(data);
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}

export function* tweetSaga() {
  yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
}
