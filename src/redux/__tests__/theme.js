// local imports
import { store } from '../store'
import {
  changeTheme,
} from '../actions/theme'

// tests
describe('Redux store', () => {
  describe('theme action', () => {
    it('Should change the theme #LIGHT', (done) => {
      const unsubscribe = store.subscribe(() => {
        const state = store.getState().get('theme')
        if (state === 'light') {
          unsubscribe()
          done()
        }
      })
      store.dispatch(changeTheme('light'))
    })
    it('Should change the theme #DARK', (done) => {
      const unsubscribe = store.subscribe(() => {
        const state = store.getState().get('theme')
        if (state === 'dark') {
          unsubscribe()
          done()
        }
      })
      store.dispatch(changeTheme('dark'))
    })
    it('Should change the theme #again #LIGHT', (done) => {
      const unsubscribe = store.subscribe(() => {
        const state = store.getState().get('theme')
        if (state === 'light') {
          unsubscribe()
          done()
        }
      })
      store.dispatch(changeTheme('light'))
    })
    it('Should update document.body\'s backgroundColor', (done) => {
      const oldBackground = JSON.stringify(document.body.style.backgroundColor)
      let timeoutID
      const unsubscribe = store.subscribe(() => {
        if (document.body.style.backgroundColor !== oldBackground) {
          unsubscribe()
          clearTimeout(timeoutID)
          done()
        }
      })
      store.dispatch(changeTheme('test'))
    })
  })
})
