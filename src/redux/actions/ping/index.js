// domain
const domain = '@ping'

// workers
function validateID (id) {
  if (id === null) throw new TypeError('uniqueIdentifier should not be null')
  if (id === undefined) throw new TypeError('uniqueIdentifier should not be null')
  if (!id) throw new Error('Missing ID parameter')
}

// actions
export const PING_PLAIN = `PLAIN${domain}`
export const PING_THUNK = `THUNK${domain}`
export const PING_SAGA_REQUESTED = `SAGA_REQUESTED${domain}`
export const PING_SAGA_SUCCEEDED = `SAGA_SUCCEEDED${domain}`

// creators
export function pingPlain (uniqueIdentifier) {
  validateID(uniqueIdentifier)
  return { type: PING_PLAIN, payload: { id: uniqueIdentifier } }
}
export function pingThunk (uniqueIdentifier) {
  validateID(uniqueIdentifier)
  return function pingThunkCreator (dispatch) {
    return dispatch({ type: PING_THUNK, payload: { id: uniqueIdentifier } })
  }
}
export function pingSaga (uniqueIdentifier) {
  validateID(uniqueIdentifier)
  return { type: PING_SAGA_REQUESTED, payload: { id: uniqueIdentifier } }
}
