// global imports
import { all } from 'redux-saga/effects'

// local imports
import infoSaga from './info'

// files saga
function* filesSaga () {
  yield all([
    infoSaga(),
  ])
}

export default filesSaga
