import React, { Component } from "react"
import PropTypes from "prop-types"
import { Collapse } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import classname from "classnames"

//i18n
import { withTranslation } from "react-i18next"

import { connect } from 'react-redux'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    let matchingMenuItem = null
    const ul = document.getElementById("navigation")
    const items = ul.getElementsByTagName("a")
    for (let i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem)
    }
  }

  activateParentDropdown = item => {
    item.classList.add("active")
    const parent = item.parentElement
    if (parent) {
      parent.classList.add("active") // li
      const parent2 = parent.parentElement
      parent2.classList.add("active") // li
      const parent3 = parent2.parentElement
      if (parent3) {
        parent3.classList.add("active") // li
        const parent4 = parent3.parentElement
        if (parent4) {
          parent4.classList.add("active") // li
          const parent5 = parent4.parentElement
          if (parent5) {
            parent5.classList.add("active") // li
            const parent6 = parent5.parentElement
            if (parent6) {
              parent6.classList.add("active") // li
            }
          }
        }
      }
    }
    return false
  }

  render() {
    const { user = {} } = this.props
    const { menu = [] } = user

    return (
      <React.Fragment>
        <div className="topnav">
          <div className="container-fluid">
            <nav
              className="navbar navbar-light navbar-expand-lg topnav-menu"
              id="navigation">
              <Collapse
                isOpen={this.props.menuOpen}
                className="navbar-collapse"
                id="topnav-menu-content">
                <ul className="navbar-nav">
                  {(menu || []).map(({ menuId = {} }, i) => (<li key={i} className="nav-item dropdown">
                    <Link
                      style={{ textTransform: 'capitalize' }}
                      className="nav-link dropdown-toggle arrow-none"
                      to={`${menuId && menuId.menukey && menuId.menukey.substring(menuId.menukey.lastIndexOf('/')) }`}>
                      <i className="bx bx-home-circle me-2" />
                      {this.props.t(menuId.menuName)}
                      <div className="arrow-down" />
                    </Link>
                    {menuId && menuId.menuSubHeader && menuId.menuSubHeader.length > 0 ?
                      <div className={classname("dropdown-menu")}>
                        {(menuId.menuSubHeader || []).map(({ menuId = {} }, subIndex) => (
                          <React.Fragment key={subIndex}>
                            {menuId && menuId.menuItem && menuId.menuItem.length > 0 ?
                              (<div className="dropdown">
                                <Link
                                  className="dropdown-item dropdown-toggle arrow-none"
                                  to={`${menuId && menuId.menukey && menuId.menukey.substring(menuId.menukey.lastIndexOf('/')) }`}>
                                  <span key="t-email-templates">{this.props.t(menuId.menuName)}</span>{" "}
                                  <div className="arrow-down"></div>
                                </Link>
                                <div className={classname("dropdown-menu")}>
                                  {(menuId.menuItem || []).map((item, itemIndex) => (
                                    <Link
                                      key={itemIndex}
                                      to={`${item && item.menuId.menukey && item.menuId.menukey.substring(item.menuId.menukey.lastIndexOf('/')) }`}
                                      className="dropdown-item">
                                      {this.props.t(item && item.menuId && item.menuId.menuName)}
                                    </Link>
                                  ))}
                                </div>
                              </div>) :
                              <Link to={`${menuId && menuId.menukey && menuId.menukey.substring(menuId.menukey.lastIndexOf('/')) }`} className="dropdown-item" style={{ textTransform: 'capitalize' }}>
                                {this.props.t(menuId.menuName)}
                              </Link>}
                          </React.Fragment>
                        ))}
                      </div> : null}
                  </li>))}
                </ul>
              </Collapse>
            </nav>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Navbar.propTypes = {
  location: PropTypes.object,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
  user: PropTypes.object
}

const mapStateToProps = (state) => {
  const { session } = state || {}
  return {
    user: session.user
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withTranslation()(Navbar)))
