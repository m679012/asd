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
  BRANCHES_FAILED,
  BRANCHES_LOADING,
  BRANCHES_SUCCEEDED,
} from '../../actions/repository/branches'

// constants
const emptyPayload = List()

// initial state
const initialState = Map({
  state: INITIAL,
  payload: emptyPayload,
})

// the reducer
function branchesReducer (state = initialState, { type, payload }) {
  switch (type) {
    case BRANCHES_LOADING:
      return state.set('state', LOADING)
    case BRANCHES_FAILED:
      return state.set(state, FAILED)
    case BRANCHES_SUCCEEDED:
      if (typeof payload !== 'object' || typeof payload.data !== 'object') throw new TypeError('Missing action/payload/data prop')
      return Map({
        state: DONE,
        payload: castToImmutable(payload.data),
      })
    default:
      return state
  }
}

export default branchesReducer
