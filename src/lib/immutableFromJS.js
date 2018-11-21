// global imports
import { Seq } from 'immutable'

// the function
function immutableFromJS (js) {
  if (typeof js !== 'object') return js
  if (js === null) return null
  const tmp = Seq(js).map(immutableFromJS)
  return Array.isArray(js) ? tmp.toList() : tmp.toMap()
}

export default immutableFromJS
