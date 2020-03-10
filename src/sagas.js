import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import config from './config'

import {
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE
} from './actions'

function* getUsers(action) {
   try {
      const { data } = yield axios.get(`${config.apiRoot}/api/users`)
      yield put({type: LOAD_USERS_SUCCESS, users: data });
   } catch (error) {
      yield put({type: LOAD_USERS_FAILURE, error: error.response.data.detail });
   }
}

function* usersSaga() {
  yield takeEvery(LOAD_USERS_REQUEST, getUsers);
}

export default usersSaga;
