import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthApi } from '../../../services/api/authApi';

import { LoadingStatus } from '../../types';
import { setUsers } from './actionCreators';
import { FetchUsersActionInterface, UsersActionsType } from './contracts/actionTypes';

export function* fetchUsersRequest({ payload }: FetchUsersActionInterface): any {
  // try {
  //   const { data } = yield call(AuthApi.signIn, payload);
  //   yield put(setUserData(data));
  //   window.localStorage.setItem('token', data.token);
  // } catch (error) {
  //   yield put(setUserLoadingStatus(LoadingStatus.ERROR));
  // }
}

export function* usersSaga() {
  yield takeLatest(UsersActionsType.FETCH_ITEMS, fetchUsersRequest);
}
