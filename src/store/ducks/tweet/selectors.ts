import { RootState } from "../../store";
import { LoadingState, TweetState } from "./contracts/state";

export const selectTweet = (state: RootState): TweetState => state.tweet;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTweet(state).loadingState;

export const selectTweetIsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectTweetIsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetData = (state: RootState): TweetState["data"] =>
  selectTweet(state).data;
