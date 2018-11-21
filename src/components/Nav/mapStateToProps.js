// local imports
import parseUrl from '../../lib/parseUrl'
import { isNull } from '../../redux/actions/repository/.states'
import themeCollection from '../../themes'

// the worker
function NavMapStateToProps (state) {
  // variables
  const { id, branch: currentBranchName } = parseUrl(state)
  let currentTheme
  let otherThemes
  let otherBranchNames
  let projectName
  let snippetsUrl
  let webUrl

  // constants
  const repositoryState = state.get('repository').get(id)

  // calculate values
  {
    /* theme */
    const currentThemeName = state.get('theme')
    currentTheme = themeCollection.find(x => x.get('name') === currentThemeName)
    otherThemes = themeCollection.filter(x => x.get('name') !== currentThemeName && x.get('name') !== 'test')
  }
  if (repositoryState) {
    {
      /* info */
      const infoState = repositoryState.get('info')
      if (!isNull(infoState.get('state'))) {
        const infoData = infoState.get('payload')
        projectName = infoData.get('name_with_namespace')
        webUrl = infoData.get('web_url')
        snippetsUrl = `${webUrl}/snippets`
      }
    }
    {
    /* branch */
      const branchesState = repositoryState.get('branches')
      if (!isNull(branchesState.get('state'))) {
        const branchList = branchesState.get('payload')
        otherBranchNames = branchList.map(br => br.get('name')).filter(name => name !== currentBranchName)
      }
    }
  }
  // export
  return {
    id,
    currentBranchName,
    otherBranchNames,
    currentTheme,
    otherThemes,
    projectName,
    snippetsUrl,
    webUrl,
  }
}

export default NavMapStateToProps
