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
  BRANCHES_FAILED,
  BRANCHES_LOADING,
  BRANCHES_REQUESTED,
  BRANCHES_SUCCEEDED,
} from '../../actions/repository/branches'

// worker
function* branchesSagaWorker () {
  // constants
  const rootState = yield select()

  const { id } = parseUrl(rootState)

  // show preloader
  yield put({ type: BRANCHES_LOADING, id })

  // fetch data
  try {
    const data = yield call(
      () => fetch(`https://gitlab.com/api/v4/projects/${id}/repository/branches`).then(response => response.json()),
    )
    yield put({ type: BRANCHES_SUCCEEDED, id, payload: { data } })
  } catch (err) {
    yield put({ type: BRANCHES_FAILED, id, payload: { err } })
  }
}

// branches saga
function* branchesSaga () {
  yield takeLatest(BRANCHES_REQUESTED, branchesSagaWorker)
}

export default branchesSaga
