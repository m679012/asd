// global imports
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'

// middlewares (local directory)
import mapStateToProps from './mapStateToProps'
import propTypes from './propTypes'

// the component
const MyTable = ({ files = [], dark }) => (
  <div>
    <Table dark={dark}>
      <thead>
        <tr>
          <th>Név</th>
          <th>Gitlab</th>
          <th>Típus</th>
        </tr>
      </thead>
      <tbody>
        {
          files.map(({
            name, filePath, type, gitlabUrl, gitlabRawUrl, url,
          }) => (
            type === 'tree' ? (
              <tr key={filePath}>
                <td><Link to={url}>{name}</Link></td>
                <td>-</td>
                <td>Mappa</td>
              </tr>
            ) : (
              <tr key={filePath}>
                <td><a href={gitlabRawUrl} target="_blank" rel="noopener noreferrer">{name}</a></td>
                <td><a href={gitlabUrl} target="_blank" rel="noopener noreferrer">Link</a></td>
                <td>Fájl</td>
              </tr>
            )
          ))
        }
      </tbody>
    </Table>
  </div>
)

MyTable.propTypes = propTypes

export default connect(mapStateToProps)(MyTable)
