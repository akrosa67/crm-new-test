import React, { Component } from "react"
import PropTypes from "prop-types"
import "react-drawer/lib/react-drawer.css"

import { connect } from "react-redux"

import { Link } from "react-router-dom"

import moment from 'moment'

// reactstrap
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap"

// Import menuDropdown
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"

import megamenuImg from "../../assets/images/megamenu-img.png"
import logo from "../../assets/images/logo.png"
import logoLight from "../../assets/images/logo.png"
import logoLightSvg from "../../assets/images/logo.png"
import logoDark from "../../assets/images/logo.png"

// Redux Store
import { toggleRightSidebar } from "../../store/actions"

//i18n
import { withTranslation } from "react-i18next"

import StopWatch from '../StopWatch'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearch: false,
      open: false,
      position: "right",
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.toggleFullscreen = this.toggleFullscreen.bind(this)
    this.toggleSearch = this.toggleSearch.bind(this)
  }

  toggleSearch = () => {
    this.setState({ isSearch: !this.state.isSearch })
  }
  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.openLeftMenuCallBack()
  }

  /**
   * Toggles the sidebar
   */
  toggleRightbar() {
    this.props.toggleRightSidebar()
  }

  toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">

              <button
                type="button"
                className="btn btn-sm px-3 font-size-16 d-lg-none header-item"
                data-toggle="collapse"
                onClick={this.toggleMenu}
                data-target="#topnav-menu-content">
                <i className="fa fa-fw fa-bars" />
              </button>

              <div className="navbar-brand-box" style={{ paddingRight: '10px' }}>
                <Link to="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logo} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoDark} alt="" height="30" />
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logoLightSvg} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoLight} alt="" height="19" />
                  </span>
                </Link>
              </div>

              <div className="logo-title">Zero Gravity</div>

              <Dropdown
                className="dropdown-mega d-none d-lg-block ms-2"
                isOpen={this.state.megaMenuDrp}
                toggle={() => {
                  this.setState({ megaMenuDrp: !this.state.megaMenuDrp })
                }}>
                <DropdownToggle className="btn header-item" caret tag="button">
                  {this.props.t("Mega Menu")}{" "}
                  <i className="mdi mdi-chevron-down" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu dropdown-megamenu">
                  <Row>
                    <Col sm={8}>
                      <Row>
                        <Col md={4}>
                          <h5 className="font-size-14 mt-0">
                            {this.props.t("UI Components")}
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">{this.props.t("Lightbox")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Range Slider")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Sweet Alert")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Rating")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Forms")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Tables")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Charts")}</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col md={4}>
                          <h5 className="font-size-14 mt-0">
                            {this.props.t("Applications")}
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">{this.props.t("Ecommerce")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Calendar")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Email")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Projects")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Tasks")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Contacts")}</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col md={4}>
                          <h5 className="font-size-14 mt-0">
                            {this.props.t("Extra Pages")}
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">
                                {this.props.t("Light Sidebar")}
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                {this.props.t("Compact Sidebar")}
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                {this.props.t("Horizontal layout")}
                              </Link>
                            </li>
                            <li>
                              <Link to="#"> {this.props.t("Maintenance")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Coming Soon")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Timeline")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("FAQs")}</Link>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={4}>
                      <Row>
                        <Col sm={6}>
                          <h5 className="font-size-14 mt-0">
                            {this.props.t("UI Components")}
                          </h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">{this.props.t("Lightbox")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Range Slider")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Sweet Alert")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Rating")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Forms")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Tables")}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t("Charts")}</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col sm={5}>
                          <div>
                            <img
                              src={megamenuImg}
                              alt=""
                              className="img-fluid mx-auto d-block"
                            />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </DropdownMenu>
              </Dropdown>



            </div>

            <div className="d-flex" style={{ width: '38%' }}>

              <form className="app-search d-none d-lg-block" style={{ width: '100%' }}>
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="bx bx-search-alt" />
                </div>
              </form>
            </div>

            <div className="d-flex" style={{ alignItems: 'center' }}>

              <div className="d-none d-lg-block">
                <StopWatch />
                <div>{moment().format('DD MMMM YYYY')}</div>
              </div>
              <div className="dropdown d-inline-block d-lg-none ms-2">
                <button
                  type="button"
                  className="btn header-item noti-icon"
                  id="page-header-search-dropdown"
                  onClick={() => {
                    this.setState({ isSearch: !this.state.isSearch })
                  }}
                >
                  <i className="mdi mdi-magnify" />
                </button>
                <div
                  className={
                    this.state.isSearch
                      ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
                      : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  }
                  aria-labelledby="page-header-search-dropdown"
                >
                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={this.props.t("Search") + "..."}
                          aria-label="Recipient's username"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit">
                            <i className="mdi mdi-magnify" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <NotificationDropdown />

              <ProfileMenu />
            </div>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

Header.propTypes = {
  openLeftMenuCallBack: PropTypes.func,
  t: PropTypes.any,
  toggleRightSidebar: PropTypes.func,
}

const mapStatetoProps = state => {
  const { layoutType } = state.Layout
  return { layoutType }
}

export default connect(mapStatetoProps, { toggleRightSidebar })(
  withTranslation()(Header)
)
