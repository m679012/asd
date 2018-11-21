// themes
import themeCollection from '../../../themes'

// domain
const domain = '@theme'

// actions
export const CHANGE_THEME = `CHANGE_THEME${domain}`

// creators
export function changeTheme (theme) {
  /* eslint-disable-next-line no-console */
  if (themeCollection.every(x => x.get('name') !== theme)) throw new Error(`Unknown theme ${theme}`)
  return { type: CHANGE_THEME, payload: { theme } }
}
