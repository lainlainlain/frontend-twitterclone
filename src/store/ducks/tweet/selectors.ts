import { RootState } from '../../store';
import { Tweet } from '../tweets/contracts/state';
import { LoadingStatus } from '../../types';
import { TweetState } from './contracts/state';

export const selectTweet = (state: RootState): TweetState => state.tweet;

export const selectLoadingStatus = (state: RootState): LoadingStatus =>
  selectTweet(state).LoadingStatus;

export const selectTweetIsLoading = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADING;

export const selectTweetIsLoaded = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADED;

export const selectTweetData = (state: RootState): Tweet | undefined => selectTweet(state).data;
