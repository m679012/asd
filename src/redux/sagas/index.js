// global imports
import { all } from 'redux-saga/effects'

// local imports
import pingSaga from './ping'
import repositorySaga from './repository'
import themeSaga from './theme'

// the saga
function* rootSaga () {
  yield all([
    pingSaga(),
    repositorySaga(),
    themeSaga(),
  ])
}

export default rootSaga
