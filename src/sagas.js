import { call, put, takeEvery } from 'redux-saga/effects'

import { getUsersSuccess, getUsersFailure} from './slice/users'
import * as services from './services'

function* getUsers(action) {
   try {
      const users = yield call(services.getUsers)
      yield put(getUsersSuccess(users))
   } catch (error) {
      yield put(getUsersFailure(error))
   }
}

function* usersSaga() {
  yield takeEvery('userSlice/getUsers', getUsers);
}

export default usersSaga;
