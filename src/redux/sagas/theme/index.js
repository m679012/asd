// global imports
import { List } from 'immutable'
import { call, takeLatest } from 'redux-saga/effects'

// local imports
import { CHANGE_THEME } from '../../actions/theme'
import themeCollection from '../../../themes'

// the worker
function* themeSagaWorker ({ payload }) {
  yield call(() => {
    if (typeof payload.theme !== 'string') throw new Error(`Invalid theme, got: ${payload} | ${JSON.stringify({ payload })}`)
    const { theme: themeName } = payload
    const pairs = themeCollection.find(x => x.get('name') === themeName).get('pairs')
    if (!(pairs instanceof List)) throw new Error(`Theme ${themeName} must contain a pairs prop with type of immutable list`)
    pairs.forEach((pair) => {
      const selector = pair.get('selector')
      const className = pair.get('className')
      const element = document.querySelector(selector)
      if (!(element instanceof HTMLElement)) throw new Error(`Invalid selector ${selector} found in theme ${themeName}`)
      const oldClassName = element.className.replace(/theme[-]\w*\s?/g, '')
      element.className = `${className} ${oldClassName}`
    })
  })
}

// the saga
function* themeSaga () {
  yield takeLatest(CHANGE_THEME, themeSagaWorker)
}

export default themeSaga
