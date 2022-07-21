import { RootState } from "../../store";
import { AddFormState, LoadingState, TweetsState } from "./contracts/state";

export const selectTweetsState = (state: RootState): TweetsState =>
  state.tweets;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTweetsState(state).loadingState;

export const selectAddFormState = (state: RootState): AddFormState =>
  selectTweetsState(state).addFormState;

export const selectTweetsIsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectTweetsIsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetsItems = (state: RootState) =>
  selectTweetsState(state).items;

// export const selectAddForm = (state: RootState): TweetsState => state.tweets.addFormState
