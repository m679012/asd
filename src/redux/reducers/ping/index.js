// global imports
import { List } from 'immutable'

// local imports
import {
  PING_PLAIN,
  PING_SAGA_SUCCEEDED,
  PING_THUNK,
} from '../../actions/ping'

// the reducer
export default function pingReducer (state = List(), { type, payload }) {
  if (!payload || typeof payload !== 'object') return state
  const { id } = payload
  switch (type) {
    case PING_PLAIN:
    case PING_THUNK:
    case PING_SAGA_SUCCEEDED:
      if (!id) throw new Error(`ID should not be falsy (null, undefined, 0, ...), got ${id}`)
      if (state.includes(id)) throw new Error(`ID should be unique, but ${id} already exists`)
      return state.push(id)
    default:
      return state
  }
}
