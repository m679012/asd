// global imports
import { List, Map } from 'immutable'

// local imports
import toImmutable from '../../../../../lib/immutableFromJS'

import {
  DONE,
  FAILED,
  INITIAL,
  LOADING,
} from '../../../../actions/repository/.states'

import {
  FILE_INFO_FETCH_FAILED,
  FILE_INFO_FETCH_LOADING,
  FILE_INFO_FETCH_SUCCEEDED,
} from '../../../../actions/repository/files/info'

// initial state
const initialState = Map({
  state: INITIAL,
  payload: List(),
})

// the reducer
function filesInfoReducer (state = initialState, { type, payload }) {
  switch (type) {
    case FILE_INFO_FETCH_LOADING:
      return state.set('state', LOADING)
    case FILE_INFO_FETCH_FAILED:
      return state.set('state', FAILED)
    case FILE_INFO_FETCH_SUCCEEDED: {
      if (typeof payload !== 'object' || !('data' in payload)) throw new Error('Payload/data doesn\'t exists')
      const { data } = payload
      const newItems = Array.isArray(data) ? toImmutable(data) : data
      if (!List.isList(newItems)) { // Bad argument
        throw new Error('Payload/data should be a list of objects')
      }
      // create updated state/payload
      const oldPayload = state.get('payload')
      let newPayload = oldPayload
      for (let i = 0; i < newItems.size; i++) {
        const item = newItems.get(i)
        const id = item.get('id')

        { // Delete if exists
          const oldItemIndex = newPayload.findLastIndex(x => x.get('id') === id)
          if (oldItemIndex !== -1) newPayload = newPayload.delete(oldItemIndex)
        }
        newPayload = newPayload.push(item)
      }
      // apply new state
      return state
        .set('state', DONE)
        .set('payload', newPayload)
    }
    default:
      return state
  }
}

export default filesInfoReducer
