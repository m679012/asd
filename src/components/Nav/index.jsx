// global imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap'

// middlewares (local directory)
import mapDispatchToProps from './mapDispatchToProps'
import mapStateToProps from './mapStateToProps'
import navPropTypes from './propTypes'
import navDefaultProps from './defaultProps'

// The component
class MyNav extends Component {
  constructor (props) {
    super(props)

    this.state = { isOpen: false }

    // binds
    this.toggleOpened = this.toggleOpened.bind(this)
  }

  toggleOpened () {
    this.setState(pre => ({ isOpen: !pre.isOpen }))
  }

  render () {
    return (
      <div>
        <Navbar
          color={this.props.currentTheme.get('isDark') ? 'dark' : 'light'}
          {...{ [this.props.currentTheme.get('isDark') ? 'dark' : 'light']: true }}
          expand="md"
        >
          <NavbarBrand>
            <NavLink rel="noopener noreferrer">
              <Link to={`/${this.props.id}/${this.props.currentBranchName}/`}>
                {this.props.projectName}
              </Link>
            </NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleOpened} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* branches */}
              {
                this.props.otherBranchNames.length > 0 ? (
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      {this.props.currentBranchName}
                    </DropdownToggle>
                    <DropdownMenu right>
                      {
                        this.props.otherBranchNames.map(branchName => (
                          <DropdownItem key={branchName}>
                            <Link to={`/${this.props.id}/${branchName}`}>
                              {branchName}
                            </Link>
                          </DropdownItem>
                        ))
                      }
                    </DropdownMenu>
                  </UncontrolledDropdown>
                ) : (
                  <NavItem>
                    <NavLink target="_blank" rel="noopener noreferrer">
                      <Link to={`/${this.props.id}/${this.props.currentBranchName}`}>
                        {this.props.currentBranchName}
                      </Link>
                    </NavLink>
                  </NavItem>
                )
              }
              {/* theme */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {this.props.currentTheme.get('displayName')}
                </DropdownToggle>
                <DropdownMenu right>
                  {
                    this.props.otherThemes.map(themeName => (
                      <DropdownItem key={themeName.get('name')} onClick={() => this.props.changeTheme(themeName.get('name'))}>
                        {themeName.get('displayName')}
                      </DropdownItem>
                    ))
                  }
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink target="_blank" rel="noopener noreferrer" href={this.props.snippetsUrl}>Snippets</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" rel="noopener noreferrer" href={this.props.webUrl}>GitLab</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

MyNav.propTypes = navPropTypes
MyNav.defaultProps = navDefaultProps

// connect & export
export default connect(mapStateToProps, mapDispatchToProps)(MyNav)
