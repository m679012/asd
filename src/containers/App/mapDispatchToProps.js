// local imports
import { infoRequested } from '../../redux/actions/repository/info'
import { branchesRequested } from '../../redux/actions/repository/branches'
import { fileInfoFetchRequested } from '../../redux/actions/repository/files/info'

// the worker
function AppMapDispatchToProps (dispatch) {
  return {
    fetchInfo: () => dispatch(infoRequested()),
    fetchBranches: () => dispatch(branchesRequested()),
    fetchFiles: () => dispatch(fileInfoFetchRequested()),
  }
}

export default AppMapDispatchToProps
