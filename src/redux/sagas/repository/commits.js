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
  COMMITS_FAILED,
  COMMITS_LOADING,
  COMMITS_REQUESTED,
  COMMITS_SUCCEEDED,
} from '../../actions/repository/commits'

// worker
function* commitsSagaWorker () {
  // constants
  const { id } = parseUrl(yield select())

  // show preloader
  yield put({ type: COMMITS_LOADING, id })

  // fetch data
  try {
    const data = yield call(
      () => fetch(`https://gitlab.com/api/v4/projects/${id}/repository/commits?per_pages=5`).then(response => response.json()), // ONLY LAST 5!!
    )
    yield put({ type: COMMITS_SUCCEEDED, id, payload: { data } })
  } catch (err) {
    yield put({ type: COMMITS_FAILED, id, payload: { err } })
  }
}

// commits saga
function* commitsSaga () {
  yield takeLatest(COMMITS_REQUESTED, commitsSagaWorker)
}

export default commitsSaga
