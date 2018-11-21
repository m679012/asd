// global imports
import React from 'react'
import { render as mount, unmountComponentAtNode as unmountAtNode } from 'react-dom'

// local imports
import Root from '../Root'

// tests
describe('<Root />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    mount(<Root />, div)
    unmountAtNode(div)
  })
})
