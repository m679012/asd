// local imports
import createFetchAction from '../../../lib/createReduxSagaFetchAction'

// exports
export const {
  BRANCHES_REQUESTED,
  BRANCHES_LOADING,
  BRANCHES_SUCCEEDED,
  BRANCHES_FAILED,
  branchesRequested,
} = createFetchAction('branches')
