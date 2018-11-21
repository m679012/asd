// global imports
import { routerMiddleware } from 'connected-react-router/immutable'
import { createBrowserHistory } from 'history'
import { Map } from 'immutable'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import reduxThunk from 'redux-thunk'
import { changeTheme } from './actions/theme'

// local imports
import createRootReducer from './reducers'
import rootSaga from './sagas'
import saveStateMiddleware from './middlewares/saveState'
import toImmutable from '../lib/immutableFromJS'
import themeList from '../themes'

// constants
const history = createBrowserHistory()
const reduxSaga = createSagaMiddleWare()

const middlewares = [
  /* REDUX DEVTOOLS GETS INSERTED BY ITS COMPOSE FUNCTION */
  saveStateMiddleware,
  reduxThunk,
  reduxSaga,
  routerMiddleware(history),
].filter(Boolean)

/* eslint-disable-next-line no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// initial State
let initialState = Map()
let currentThemeName = ''
try {
  const fromLocalStore = localStorage.getItem('redux-backup')
  if (fromLocalStore != null) {
    const jsState = JSON.parse(fromLocalStore)
    const immutableState = toImmutable(jsState)
    initialState = immutableState
    currentThemeName = themeList.find(theme => theme.get('name') === initialState.get('theme')).get('name')
  }
} catch (err) {
  /* eslint-disable-next-line no-console */
  console.error(err)
}
// the store
const store = createStore(
  createRootReducer(history),
  initialState,
  composeEnhancers(
    applyMiddleware(
      ...middlewares,
    ),
  ),
)

// others
reduxSaga.run(rootSaga)

// exports
export { store, history }

window.store = store // TODO: Delete

// Change theme (has side effects outside react dom)
if (currentThemeName !== '') store.dispatch(changeTheme(currentThemeName))
