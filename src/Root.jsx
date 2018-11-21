// global imports
import React, { Component, Fragment } from 'react'
import { ConnectedRouter } from 'connected-react-router/immutable'
import { Provider } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

// local component imports
import App from './containers/App'

// local imports
import { history, store } from './redux/store'

const DefaultRedirect = () => (
  window.location.pathname.length < 2 ? (<Redirect to="9443165/master" />) : null
)

// the component
class Root extends Component {
  constructor (props) {
    super(props)

    this.state = { valid: false }
    this.checkState = this.checkState.bind(this)

    this.checkState()
  }

  checkState () {
    this.interval = setInterval(() => {
      clearInterval(this.interval)
      const valid = /[0-9]{1,}[/][a-z]{1,}[.]*/i.test(store.getState().get('router').location.pathname)
      this.setState({ valid })
      if (valid) clearInterval(this.interval)
    }, 50)
  }

  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Fragment>
            <DefaultRedirect />
            {!this.state.valid && <Link onClick={this.checkState} to="/8383706/master">DEFAULT PROJECT</Link>}
            {this.state.valid && <App />}
          </Fragment>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Root
