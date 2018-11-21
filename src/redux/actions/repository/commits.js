// local imports
import createFetchAction from '../../../lib/createReduxSagaFetchAction'

// exports
export const {
  COMMITS_REQUESTED,
  COMMITS_LOADING,
  COMMITS_SUCCEEDED,
  COMMITS_FAILED,
  commitsRequested,
} = createFetchAction('commits')
