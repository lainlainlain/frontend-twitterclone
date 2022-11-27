import { LoadingStatus } from '../../../types';

export interface Tag {
  text: string;
  count: number;
}

export interface TagsState {
  items: Tag[];
  LoadingStatus: LoadingStatus;
}
