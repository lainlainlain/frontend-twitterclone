import { call, put, takeLatest } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import {
  addTweet,
  setAddTweetForm,
  setTweets,
  setTweetsLoadingState,
} from "./actionCreators";
import {
  FetchAddTweetActionInterface,
  TweetsActionsType,
} from "./contracts/actionTypes";
import { AddFormState, LoadingState } from "./contracts/state";

export function* fetchTweetsRequest(): any {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* fetchAddTweetRequest({
  payload: text,
}: FetchAddTweetActionInterface): any {
  try {
    const item = yield call(TweetsApi.addTweet, text);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setAddTweetForm(AddFormState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
