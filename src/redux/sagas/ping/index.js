// global imports
import { call, put, takeEvery } from 'redux-saga/effects'

// local imports
import { PING_SAGA_REQUESTED, PING_SAGA_SUCCEEDED } from '../../actions/ping'

// the worker
function* pingSagaWorker (action) {
  const { type, ...actionWithOutType } = yield call(() => Promise.resolve(action)) // async it for better test coverage
  yield put({ type: PING_SAGA_SUCCEEDED, ...actionWithOutType })
}

// the saga
function* pingSaga () {
  yield takeEvery(PING_SAGA_REQUESTED, pingSagaWorker)
}

export default pingSaga
