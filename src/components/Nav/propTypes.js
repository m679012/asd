// global imports
import { List } from 'immutable'
import PropTypes from 'prop-types'

// models
const themeType = PropTypes.shape({
  name: PropTypes.string,
  displayName: PropTypes.string,
})

export default {
  // actions
  /* from url */
  id: PropTypes.number.isRequired,
  currentBranchName: PropTypes.string.isRequired,
  /* other branches */
  otherBranchNames: PropTypes.instanceOf(List),
  /* theme */
  currentTheme: themeType,
  otherThemes: PropTypes.instanceOf(List),
  /* from info */
  projectName: PropTypes.string,
  snippetsUrl: PropTypes.string,
  webUrl: PropTypes.string,

  // dispatchers
  changeTheme: PropTypes.func.isRequired,
}
