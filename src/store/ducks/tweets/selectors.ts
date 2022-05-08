import { createSelector } from "reselect";
import { RootState } from "../../store";
import { AddFormState, LoadingState, TweetsState } from "./contracts/state";

export const selectTweets = (state: RootState): TweetsState => state.tweets;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTweets(state).loadingState;

export const selectAddFormState = (state: RootState): AddFormState =>
  selectTweets(state).addFormState;

export const selectTweetsItems = createSelector(
  selectTweets,
  (tweets) => tweets.items
);

export const selectTweetsIsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectTweetsIsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

// export const selectAddForm = (state: RootState): TweetsState => state.tweets.addFormState
