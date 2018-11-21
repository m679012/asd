// global imports
import { List, Map } from 'immutable'

import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects'

// local imports
import parseUrl from '../../../../../lib/parseUrl'

import {
  FILE_INFO_FETCH_FAILED,
  FILE_INFO_FETCH_LOADING,
  FILE_INFO_FETCH_REQUESTED,
  FILE_INFO_FETCH_SUCCEEDED,
} from '../../../../actions/repository/files/info'

// worker
function* branchesSagaWorker () {
  // constants
  const rootState = yield select()

  const { id, branch } = parseUrl(rootState)

  // show preloader
  yield put({ type: FILE_INFO_FETCH_LOADING, id })

  // Fetch all files
  try {
    const perPage = 50
    let numLastPage
    let page = 1
    let allData = List()
    do {
      const data = yield call(
        /* eslint-disable-next-line no-loop-func */
        () => fetch(`https://gitlab.com/api/v4/projects/${id}/repository/tree/?recursive=true&per_page=${perPage}&ref=${branch}&page=${page}`).then(response => response.json()),
      )
      numLastPage = data.length
      page += 1
      allData = allData.concat(data.map(x => Map(x)))
    } while (numLastPage === perPage)
    yield put({ type: FILE_INFO_FETCH_SUCCEEDED, id, payload: { data: allData } })
  } catch (err) {
    yield put({ type: FILE_INFO_FETCH_FAILED, id, payload: { err } })
  }
}

// branches saga
function* branchesSaga () {
  yield takeLatest(FILE_INFO_FETCH_REQUESTED, branchesSagaWorker)
}

export default branchesSaga
