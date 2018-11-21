import validateRepositoryID from './validateRepositoryID'

export default function parseUrl (state) {
  const { pathname } = state ? state.get('router').location : window.location
  const [, id, branch, ...dirs] = pathname.split('/')
  // check
  validateRepositoryID(id)
  if (typeof branch !== 'string' || branch.length < 1) throw new Error('Missing branch in the URL')
  // return
  return { id, branch, dirs }
}
