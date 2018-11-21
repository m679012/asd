// global imports
import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects'

// local imports
import parseUrl from '../../../lib/parseUrl'

import {
  INFO_FAILED,
  INFO_LOADING,
  INFO_REQUESTED,
  INFO_SUCCEEDED,
} from '../../actions/repository/info'

// worker
function* infoSagaWorker () {
  // constants
  const rootState = yield select()

  const { id } = parseUrl(rootState)

  // show preloader
  yield put({ type: INFO_LOADING, id })

  // fetch data
  try {
    const data = yield call(
      () => fetch(`https://gitlab.com/api/v4/projects/${id}/`).then(response => response.json()),
    )
    yield put({ type: INFO_SUCCEEDED, id, payload: { data } })
  } catch (err) {
    yield put({ type: INFO_FAILED, id, payload: { err } })
  }
}

// info saga
function* infoSaga () {
  yield takeLatest(INFO_REQUESTED, infoSagaWorker)
}

export default infoSaga
