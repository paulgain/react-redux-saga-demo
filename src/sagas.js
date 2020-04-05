import { call, put, takeEvery } from 'redux-saga/effects'
import { api } from './services'

import {
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE
} from './actions'

function* getUsers(action) {
   try {
      const users = yield call(api.getUsers)
      yield put({type: LOAD_USERS_SUCCESS, users });
   } catch (error) {
      yield put({type: LOAD_USERS_FAILURE, error });
   }
}

function* usersSaga() {
  yield takeEvery(LOAD_USERS_REQUEST, getUsers);
}

export default usersSaga;
