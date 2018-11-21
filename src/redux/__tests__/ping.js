// local imports
import { store } from '../store'
import {
  pingPlain,
  pingSaga,
  pingThunk,
} from '../actions/ping'

// tests
describe('Redux store', () => {
  describe('Ping action', () => {
    [
      { action: pingPlain, name: 'plain' },
      { action: pingThunk, name: 'thunk' },
      { action: pingSaga, name: 'saga' },
    ].forEach(({ action, name }) => {
    // worker
      it(`Should dispatch a ${name} ping action`, (done) => {
        const id = Math.random()
        const unsubscribe = store.subscribe(() => {
          const pingState = store.getState().get('ping')
          if (pingState.includes(id)) {
            unsubscribe()
            done()
          }
        })
        store.dispatch(action(id))
      })
    })
  })
})
