// local imports
import { CHANGE_THEME } from '../../actions/theme'
import themeCollection from '../../../themes'

// initial state
/* find default or use last */
const initialState = themeCollection.find(
  (x, i) => {
    if (x.get('isDefault')) return true
    if (i === themeCollection.length - 1) {
      /* eslint-disable-next-line no-console */
      console.warn(`No default theme set, using last = ${x.get('name')}`)
      return true
    }
    return false
  },
).get('name')

// the reducer
export default function themeReducer (state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_THEME:
      if (!('theme' in payload)) throw new Error(`Missing theme prop in payload, got: ${payload.theme}`)
      return payload.theme
    default:
      return state
  }
}
