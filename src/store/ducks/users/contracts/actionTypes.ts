import { Action } from 'redux';
import { LoginFormProps } from '../../../../pages/SignIn/components/LoginModal';
import { User } from '../../user/contracts/state';

export enum UsersActionsType {
  SET_ITEMS = 'users/SET_ITEMS',
  FETCH_ITEMS = 'users/FETCH_ITEMS',
}

export interface SetUsersDataActionInterface extends Action<UsersActionsType> {
  type: UsersActionsType.SET_ITEMS;
  payload: User[];
}

export interface FetchUsersActionInterface extends Action<UsersActionsType> {
  type: UsersActionsType.FETCH_ITEMS;
  payload: LoginFormProps;
}

export type UsersActions = SetUsersDataActionInterface | FetchUsersActionInterface;
