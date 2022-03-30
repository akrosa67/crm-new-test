import React, { useEffect } from "react"
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { logOut as logoutUser } from '../../store/session/actions'

function Logout(props) {

  useEffect(() => {
    props.logoutUser(props.history)
  }, [])

  return <React.Fragment></React.Fragment>

}

Logout.propTypes = {
  history: PropTypes.any,
  logoutUser: PropTypes.func
}

export default withRouter(connect(null, { logoutUser })(Logout))
