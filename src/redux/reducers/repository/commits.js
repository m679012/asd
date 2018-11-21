// global reducers
import { List, Map } from 'immutable'

// local imports
import castToImmutable from '../../../lib/immutableFromJS'
import {
  DONE,
  FAILED,
  INITIAL,
  LOADING,
} from '../../actions/repository/.states'

import {
  COMMITS_FAILED,
  COMMITS_LOADING,
  COMMITS_SUCCEEDED,
} from '../../actions/repository/commits'

// constants
const emptyPayload = List()

// initial state
const initialState = Map({
  state: INITIAL,
  payload: emptyPayload,
})

// the reducer
function commitsReducer (state = initialState, { type, payload }) {
  switch (type) {
    case COMMITS_LOADING:
      return state.set('state', LOADING)
    case COMMITS_FAILED:
      return state.set('state', FAILED)
    case COMMITS_SUCCEEDED:
      if (typeof payload !== 'object' || typeof payload.data !== 'object') throw new TypeError('Missing action/payload/data prop')
      return Map({
        state: DONE,
        payload: castToImmutable(payload.data),
      })
    default:
      return state
  }
}

export default commitsReducer
