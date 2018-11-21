// local imports
import { changeTheme } from '../../redux/actions/theme'

// the worker
function NavMapDispatchToProps (dispatch) {
  return {
    changeTheme (newThemeName) { dispatch(changeTheme(newThemeName)) },
  }
}

export default NavMapDispatchToProps
