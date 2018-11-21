// global imports
import { all } from 'redux-saga/effects'

// local imports
import branchesSaga from './branches'
import commitsSaga from './commits'
import fileSaga from './files'
import infoSaga from './info'

// combine saga
function* repositorySaga () {
  yield all([
    branchesSaga(),
    commitsSaga(),
    fileSaga(),
    infoSaga(),
  ])
}

export default repositorySaga
