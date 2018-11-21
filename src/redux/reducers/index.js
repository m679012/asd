// global imports
import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux-immutable'

// local imports
import pingReducer from './ping'
import repositoryReducer from './repository'
import themeReducer from './theme'

// the root reducer
export default history => combineReducers({
  ping: pingReducer,
  repository: repositoryReducer,
  router: connectRouter(history),
  theme: themeReducer,
})
