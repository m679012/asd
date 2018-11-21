// local imports
import createFetchAction from '../../../lib/createReduxSagaFetchAction'

// exports
export const {
  INFO_REQUESTED,
  INFO_LOADING,
  INFO_SUCCEEDED,
  INFO_FAILED,
  infoRequested,
} = createFetchAction('info')
