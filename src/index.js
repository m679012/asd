// global imports
import { createElement } from 'react'
import { render } from 'react-dom'

// global style imports
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

// local imports
import './styles.css'

// local component imports
import Root from './Root'

// local imports
import { register as serviceWorker } from './serviceWorker'

// constants
const reactApp = document.getElementById('reactApp')

// the component
if (reactApp instanceof window.HTMLElement) {
  render(
    createElement(Root),
    reactApp,
  )
} else {
  throw new TypeError('Missing #reactApp element in index.html')
}
// other
serviceWorker()
