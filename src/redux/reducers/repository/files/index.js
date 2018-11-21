// global imports
import { Map } from 'immutable'
import { combineReducers } from 'redux-immutable'

// local imports
import { RESET_DATA } from '../../../actions/repository/files/resetData'
import fileInfoReducer from './info'


// the combined reducer
const combinedReducers = combineReducers({
  info: fileInfoReducer,
})

// the files reducer
function filesReducer (state = Map(), action) {
  const { type } = action

  return combinedReducers(
    type === RESET_DATA ? Map() : state,
    action,
  )
}

export default filesReducer
