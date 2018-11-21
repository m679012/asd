// global reducers
import { Map } from 'immutable'
import castToImmutable from '../../../lib/immutableFromJS'

// local imports
import {
  INFO_LOADING,
  INFO_SUCCEEDED,
  INFO_FAILED,
} from '../../actions/repository/info'

import {
  DONE,
  INITIAL,
  FAILED,
  LOADING,
} from '../../actions/repository/.states'

// constants
const emptyPayload = Map()

// initial state
const initialState = Map({
  state: INITIAL,
  payload: emptyPayload,
})

// the reducer
function infoReducer (state = initialState, { type, payload }) {
  switch (type) {
    case INFO_LOADING:
      return state.set('state', LOADING)
    case INFO_FAILED:
      return state.set('state', FAILED)
    case INFO_SUCCEEDED:
      if (typeof payload !== 'object' || typeof payload.data !== 'object') throw new TypeError('Missing action/payload/data prop')
      return Map({
        state: DONE,
        payload: castToImmutable(payload.data),
      })
    default:
      return state
  }
}

export default infoReducer
