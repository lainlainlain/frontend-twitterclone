import { UsersState } from './contracts/state';

import {
  SetUsersDataActionInterface,
  UsersActionsType,
  FetchUsersActionInterface,
} from './contracts/actionTypes';
import { LoginFormProps } from '../../../pages/SignIn/LoginModal';
import { User } from '../user/contracts/state';

export const setUsers = (payload: User[]): SetUsersDataActionInterface => ({
  type: UsersActionsType.SET_ITEMS,
  payload,
});

export const fetchUsers = (payload: LoginFormProps): FetchUsersActionInterface => ({
  type: UsersActionsType.FETCH_ITEMS,
  payload,
});

export type TweetActions = SetUsersDataActionInterface | FetchUsersActionInterface;
