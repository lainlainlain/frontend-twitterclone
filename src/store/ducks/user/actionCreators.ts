import { UserState } from './contracts/state';

import {
  SetUserLoadingUserStateActionInterface,
  SetUserDataActionInterface,
  UserActionsType,
  FetchSignInActionInterface,
  FetchSignUpActionInterface,
  FetchUserDataActionInterface,
  SignOutActionInterface,
} from './contracts/actionTypes';
import { LoginFormProps } from '../../../pages/SignIn/components/LoginModal';
import { RegisterFormProps } from '../../../pages/SignIn/components/RegisterModal';

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
  type: UserActionsType.SET_USER_DATA,
  payload,
});

export const fetchSignIn = (payload: LoginFormProps): FetchSignInActionInterface => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload,
});

export const signOut = (): SignOutActionInterface => ({
  type: UserActionsType.SIGN_OUT,
});

export const fetchUserData = (): FetchUserDataActionInterface => ({
  type: UserActionsType.FETCH_USER_DATA,
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
