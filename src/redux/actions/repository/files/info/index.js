// local imports
import createFetchAction from '../../../../../lib/createReduxSagaFetchAction'

// domain
const domain = '@files-info'

// exports
export const {
  FILE_INFO_FETCH_REQUESTED,
  FILE_INFO_FETCH_LOADING,
  FILE_INFO_FETCH_SUCCEEDED,
  FILE_INFO_FETCH_FAILED,
  fileInfoFetchRequested,
} = createFetchAction('fileInfoFetch', domain)
