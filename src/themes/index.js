// global imports
import { List } from 'immutable'

// local imports
import toImmutable from '../lib/immutableFromJS'

// theme imports
import testTheme from './testTheme'
import darkTheme from './dark'
import lightTheme from './light'

function createTheme (pairs, name, displayName, isDark, isDefault) {
  if (!Array.isArray(pairs)) throw new Error('classNames must be an array of componentSelector-class pairs')
  return toImmutable({
    pairs,
    name,
    displayName,
    isDark,
    isDefault,
  })
}

// export
export default List([
  createTheme(testTheme, 'test', '>>Test<<'),
  createTheme(darkTheme, 'dark', 'sötét', true),
  createTheme(lightTheme, 'light', 'világos', false, true),
])
