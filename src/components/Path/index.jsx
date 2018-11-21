import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// middlewares (local directory)
import mapStateToProps from './mapStateToProps'
import propTypes from './propTypes'

// the component
const Path = ({ path }) => (
  <div id="path">
    <Breadcrumb>
      {
        path.map((x, i) => (
          <BreadcrumbItem key={x.get('url')} active={i === 0}>
            <Link to={x.get('url')}>
              {x.get('dir')}
            </Link>
          </BreadcrumbItem>
        ))
      }
    </Breadcrumb>
  </div>
)

Path.propTypes = propTypes

export default connect(mapStateToProps)(Path)
