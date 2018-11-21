// local imports
import parseUrl from '../../lib/parseUrl'
import { isNull } from '../../redux/actions/repository/.states'

// the worker
function TableMapStateToProps (state) {
  // variables
  const { id, branch, dirs } = parseUrl(state)

  const tmp = dirs.reduce((path, item) => `${path}/${item}`, '')
  const workingDirectory = tmp.replace(/[/]/g, (m, i) => (i === 0 || i + 1 === tmp.length ? '' : '/'))
  const isRootDir = workingDirectory === ''
  const isInDirRegExp = new RegExp(`^${workingDirectory}${isRootDir ? '' : '[/]'}[^/]{${isRootDir ? 0 : 1},}$`, 'i')

  const repositoryState = state.get('repository').get(id)
  if (repositoryState) {
    let webUrl = ''
    if (!isNull(repositoryState.get('info').get('state'))) {
      webUrl = repositoryState.get('info').get('payload').get('web_url')
    }
    const fileRootState = repositoryState.get('files').get('info') // not the content of files
    if (!isNull(fileRootState.get('state'))) {
      const files = fileRootState.get('payload').toJS().filter(({ path }) => isInDirRegExp.test(path))
      return {
        files: files.map(({ name, path: filePath, type }) => ({
          name,
          filePath,
          type,
          gitlabUrl: `${webUrl}/blob/${branch}/${filePath}`,
          gitlabRawUrl: `${webUrl}/raw/${branch}/${filePath}`,
          url: `/${id}/${branch}/${filePath}`,
        })),
        dark: state.get('theme') === 'dark',
      }
    }
  }
  return {}
}

export default TableMapStateToProps
