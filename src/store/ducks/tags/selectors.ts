import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingStatus } from '../../types';
import { TagsState } from './contracts/state';

export const selectTags = (state: RootState): TagsState => state.tags;

export const selectLoadingStatus = (state: RootState): LoadingStatus =>
  selectTags(state).LoadingStatus;

export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);

export const selectTagsIsLoading = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADING;

export const selectTagsIsLoaded = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADED;
