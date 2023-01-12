import { UserState } from './contracts/state';

import {
  SetUserLoadingUserStateActionInterface,
  SetUserDataActionInterface,
  UserActionsType,
  FetchSignInActionInterface,
  FetchSignUpActionInterface,
} from './contracts/actionTypes';
import { LoginFormProps } from '../../../pages/SignIn/LoginModal';
import { RegisterFormProps } from '../../../pages/SignIn/RegisterModal';

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
  type: UserActionsType.SET_USER_DATA,
  payload,
});

export const fetchSignIn = (payload: LoginFormProps): FetchSignInActionInterface => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload,
});

export const fetchSignUp = (payload: RegisterFormProps): FetchSignUpActionInterface => ({
  type: UserActionsType.FETCH_SIGN_UP,
  payload,
});

export const setUserLoadingStatus = (
  payload: UserState['status'],
): SetUserLoadingUserStateActionInterface => ({
  type: UserActionsType.SET_LOADING_STATE,
  payload,
});

export type TweetActions = SetUserDataActionInterface | SetUserLoadingUserStateActionInterface;
