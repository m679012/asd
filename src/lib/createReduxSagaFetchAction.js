// constants
const repositoryDomain = '@repository'

// worker
export default function createFetchAction (name, itsDomain = repositoryDomain) {
  const itsExports = {}
  const NAME = name.replace(/[A-Z]/g, (m => `_${m}`)).toUpperCase()

  const ACTION_REQUESTED = `${NAME}_REQUESTED${itsDomain}`
  const ACTION_LOADING = `${NAME}_LOADING${itsDomain}`
  const ACTION_SUCCEEDED = `${NAME}_SUCCEEDED${itsDomain}`
  const ACTION_FAILED = `${NAME}_FAILED${itsDomain}`

  itsExports[`${NAME}_REQUESTED`] = ACTION_REQUESTED
  itsExports[`${NAME}_LOADING`] = ACTION_LOADING
  itsExports[`${NAME}_SUCCEEDED`] = ACTION_SUCCEEDED
  itsExports[`${NAME}_FAILED`] = ACTION_FAILED

  itsExports[`${name}Requested`] = function actionRequested (params) {
    return { ...params, type: ACTION_REQUESTED }
  }

  return itsExports
}
