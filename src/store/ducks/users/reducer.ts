import produce, { Draft } from 'immer';

import { UsersActions, UsersActionsType } from './contracts/actionTypes';
import { UsersState } from './contracts/state';
import { LoadingStatus } from '../../types';

const initialUsersState: UsersState = {
  items: [],
  status: LoadingStatus.NEVER,
};

export const usersReducer = produce((draft: Draft<UsersState>, action: UsersActions) => {
  switch (action.type) {
    case UsersActionsType.SET_ITEMS:
      draft.items = action.payload;
      draft.status = LoadingStatus.SUCCESS;
      break;

    case UsersActionsType.FETCH_ITEMS:
      draft.status = LoadingStatus.LOADING;
      break;

    default:
      break;
  }
}, initialUsersState);
