// global imports
import { Map } from 'immutable'
import { combineReducers } from 'redux-immutable'

// local imports
import { DONE } from '../../actions/repository/.states'
import branchesReducer from './branches'
import commitsReducer from './commits'
import filesReducer from './files'
import infoReducer from './info'

// combine child reducers
const combinedReducers = combineReducers({
  branches: branchesReducer,
  commits: commitsReducer,
  files: filesReducer,
  info: infoReducer,
  defaultBranch: x => x || null, // HACK:  Hide console error
})

// the root reducer
function repositoryRootReducer (rootState = Map(), { type, id /* child dont gets id */, ...childActionWithoutType }) {
  if (!id) return rootState
  // root to branch based on id & update state
  const prevState = rootState.get(id)
  const newState = combinedReducers(prevState, { type, ...childActionWithoutType })

  // find default branch
  let defaultBranch = rootState.get('defaultBranch')
  const info = newState.get('info')
  const branches = newState.get('branches')
  if (info.get('state') === DONE) {
    defaultBranch = info.get('payload').get('default_branch')
  } else if (branches.get('state') === DONE) {
    defaultBranch = branches.get('payload').find(x => x.get('default')).get('name')
  }

  const newStateWithDefaultBranch = newState.set('defaultBranch', defaultBranch)
  return rootState.set(id.toString(), newStateWithDefaultBranch)
}

export default repositoryRootReducer
