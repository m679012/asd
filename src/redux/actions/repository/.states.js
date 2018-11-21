// domain
const domain = '@repository-.states'

// exports
export const DONE = `DONE${domain}` // done
export const FAILED = `FAILED${domain}` // failed
export const INITIAL = `INITIAL${domain}`
export const LOADING = `LOADING${domain}` // = empty, but no error

export const isNull = state => state == INITIAL || state == FAILED
