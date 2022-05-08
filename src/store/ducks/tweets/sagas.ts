import { call, put, takeLatest } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import {
  addTweet,
  fetchAddTweet,
  setAddTweetForm,
  setTweets,
  setTweetsLoadingState,
} from "./actionCreators";
import {
  FetchAddTweetActionInterface,
  TweetsActionsType,
} from "./contracts/actionTypes";
import { AddFormState, LoadingState, Tweet } from "./contracts/state";

export function* fetchTweetsRequest(): any {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* addTweetRequest({
  payload,
}: FetchAddTweetActionInterface): any {
  try {
    const data: Tweet = {
      _id: Math.random().toString(36).substring(2),
      text: payload,
      user: {
        fullname: "asdasd",
        username: "qwewqe",
        avatarUrl: "https://i.imgur.com/CgCsN3z.jpg?1",
      },
    };
    const item = yield call(TweetsApi.fetchAddTweet, data);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setAddTweetForm(AddFormState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, addTweetRequest);
}
