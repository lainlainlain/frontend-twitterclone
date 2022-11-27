import { Action } from 'redux';
import { LoginFormProps } from '../../../../pages/Home/SignIn/LoginModal';
import { LoadingStatus } from '../../../types';

import { User } from './state';

export enum UserActionsType {
  SET_USER_DATA = 'user/SET_USER_DATA',
  SET_LOADING_STATE = 'user/SET_LOADING_STATE',
  FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
}

export interface SetUserDataActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_USER_DATA;
  payload: User | undefined;
}

export interface SetUserLoadingUserStateActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

export interface FetchSignInActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGN_IN;
  payload: LoginFormProps;
}

export type UserActions = SetUserDataActionInterface | SetUserLoadingUserStateActionInterface;
