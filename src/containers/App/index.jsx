// global imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'

// local component imports
import Nav from '../../components/Nav'
import Path from '../../components/Path'
import Table from '../../components/Table'

// Middlewares (local directory)
import mapDispatchToProps from './mapDispatchToProps'
import appPropTypes from './propTypes'

// the component
class App extends Component {
  componentDidMount () {
    try {
      if( navigator.onLine === true ) {
        this.props.fetchInfo()
        this.props.fetchBranches()
        this.props.fetchFiles()
      } else if(navigator.onLine !== false ){
        throw new Error('No navigator')
      }
    }
     catch (err) {
      this.props.fetchInfo()
      this.props.fetchBranches()
      this.props.fetchFiles()
     }
  }

  render () {
    return (
      <Container id="App">
        <Nav />
        <Path />
        <Table />
      </Container>
    )
  }
}
App.propTypes = appPropTypes

// export
export default connect(() => ({}), mapDispatchToProps)(App)

/* eslint-disable */

// global imports
// import React from 'react'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
// import { List, Map } from 'immutable'

// // local imports

// import {
//   pingPlain,
//   pingThunk,
//   pingSaga,
// } from './redux/actions/ping'

// import {
//   changeTheme,
//   changeGlobalStyle,
//   LIGHT_MODE,
//   DARK_MODE,
// } from './redux/actions/theme'

// import { infoRequested } from './redux/actions/repository/info'
// import { commitsRequested } from './redux/actions/repository/commits'
// import { branchesRequested } from './redux/actions/repository/branches'
// import { fileInfoFetchRequested } from './redux/actions/repository/files/info'

// // the component
// const App = props => (
//   <div>
//     <h1>Hello World</h1>
//     <div>
//       <h3>Ping</h3>
//       <div>
//         {JSON.stringify(props.ping.toJS())}
//       </div>
//       <button type="button" onClick={props.plainPing}>PLAIN PING</button>
//       <button type="button" onClick={props.sagaPing}>THUNK PING</button>
//       <button type="button" onClick={props.thunkPing}>SAGA PING</button>
//     </div>
//     <div>
//       <h3>Theme</h3>
//       <div>
//         {props.currentTheme.match(/^[\w]*/i)}
//       </div>
//       <button type="button" onClick={props.lightTheme}>LIGHT THEME</button>
//       <button type="button" onClick={props.darkTheme}>DARK THEME</button>
//     </div>
//     <div>
//       <h2>{`Repository #${props.id}`}</h2>
//       <button type="button" onClick={props.fetchAll}>FETCH ALL</button>
//       <div>
//         <h3>Info</h3>
//         <button type="button" onClick={props.fetchInfo}>FETCH INFO</button>
//         <div>{props.currentRepository && props.currentRepository.has('info') && JSON.stringify(props.currentRepository.get('info').toJS())}</div>
//       </div>
//       <div>
//         <h3>Commits</h3>
//         <button type="button" onClick={props.fetchCommits}>FETCH COMMITS</button>
//         <div>{props.currentRepository && props.currentRepository.has('commits') && JSON.stringify(props.currentRepository.get('commits').toJS())}</div>
//       </div>
//       <div>
//         <h3>{`Branches (current=${props.branch})`}</h3>
//         <button type="button" onClick={props.fetchBranches}>FETCH BRANCHES</button>
//         <div>{props.currentRepository && props.currentRepository.has('branches') && JSON.stringify(props.currentRepository.get('branches').toJS())}</div>
//       </div>
//       <div>
//         <h3>Files</h3>
//         <button type="button" onClick={props.fetchFiles}>FETCH FILES</button>
//         <div>{props.currentRepository && props.currentRepository.has('files') && JSON.stringify(props.currentRepository.get('files').toJS())}</div>
//       </div>
//       <div>
//         <h3>Root state</h3>
//         <div>{props.currentRepository && JSON.stringify(props.currentRepository.toJS())}</div>
//       </div>
//     </div>
//   </div>
// )

// // prop types
// NewApp.defaultProps = {
//   currentRepository: null,
// }
// NewApp.propTypes = {
//   // state
//   id: PropTypes.number.isRequired,
//   branch: PropTypes.string.isRequired,
//   ping: PropTypes.instanceOf(List).isRequired,
//   currentTheme: PropTypes.string.isRequired,
//   currentRepository: PropTypes.instanceOf(Map),
//   // actions
//   plainPing: PropTypes.func.isRequired,
//   sagaPing: PropTypes.func.isRequired,
//   thunkPing: PropTypes.func.isRequired,
//   lightTheme: PropTypes.func.isRequired,
//   darkTheme: PropTypes.func.isRequired,
//   fetchInfo: PropTypes.func.isRequired,
//   fetchCommits: PropTypes.func.isRequired,
//   fetchBranches: PropTypes.func.isRequired,
//   fetchFiles: PropTypes.func.isRequired,
//   fetchAll: PropTypes.func.isRequired,
// }

// // redux constants
// const bodyStyles = {
//   DARK: { backgroundColor: 'black', color: 'white' },
//   LIGHT: { backgroundColor: 'white', color: 'black' },
// }

// // redux binds
// const mapStateToProps = (state) => {
//   const id = parseInt(state.get('router').location.pathname.split('/')[1], 10)
//   const branch = state.get('router').location.pathname.split('/')[2] || ''
//   return {
//     id,
//     branch,
//     ping: state.get('ping'),
//     currentTheme: state.get('theme').get('current'),
//     currentRepository: state.get('repository').get(id), /* FIX WITH: use id.string() */
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     // ping
//     plainPing () { dispatch(pingPlain(`Plain: ${Math.random()}`)) },
//     thunkPing () { dispatch(pingThunk(`Thunk: ${Math.random()}`)) },
//     sagaPing () { dispatch(pingSaga(`Saga: ${Math.random()}`)) },
//     // theme
//     lightTheme () {
//       dispatch(changeTheme(LIGHT_MODE))
//       dispatch(changeGlobalStyle(bodyStyles.LIGHT))
//     },
//     darkTheme () {
//       dispatch(changeTheme(DARK_MODE))
//       dispatch(changeGlobalStyle(bodyStyles.DARK))
//     },
//     // repository
//     fetchInfo () {
//       dispatch(infoRequested())
//     },
//     fetchCommits () {
//       dispatch(commitsRequested())
//     },
//     fetchBranches () {
//       dispatch(branchesRequested())
//     },
//     fetchFiles () {
//       dispatch(fileInfoFetchRequested())
//     },
//     fetchAll () {
//       dispatch(infoRequested())
//       dispatch(commitsRequested())
//       dispatch(branchesRequested())
//       dispatch(fileInfoFetchRequested())
//     },
//   }
// }

// // export
// export const oldElement =  connect(mapStateToProps, mapDispatchToProps)(NewApp)
