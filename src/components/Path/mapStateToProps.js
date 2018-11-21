// global imports
import { List, Map } from 'immutable'
// local imports
import parseUrl from '../../lib/parseUrl'

// the worker
function PathMapStateToProps (state) {
  const { id, branch, dirs } = parseUrl(state)
  // TODO: Branch selector
  const path = List([id, branch, ...dirs].filter(str => str.length))
  let url = '' // typeof == accumulator
  const returnValue = path.map((dir) => {
    url += `/${dir}`
    return Map({ dir, url })
  })
  return { path: returnValue }
}

export default PathMapStateToProps
