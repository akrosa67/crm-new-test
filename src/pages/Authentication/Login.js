import React, { useState } from "react"
import PropTypes from "prop-types"

import { Alert, Card, CardBody, Col, Container, Row, Label } from "reactstrap"

// Redux
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

import { logIn as loginUser } from '../../store/session/actions'

// import images
import profile from "../../assets/images/profile-img.png"
import logo from "../../assets/images/logo.png"
import lightlogo from "../../assets/images/logo-light.svg"

import ButtonSpinner from "components/ButtonSpinner"

function Login(props) {

  const [passwordToggle, setPasswordToggle] = useState(false)

  const handleTogglePassword = () => {
    setPasswordToggle(!passwordToggle)
  }


  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="bx bx-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div className="auth-logo">
                    <Link to="/" className="auth-logo-light">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={lightlogo}
                            alt=""
                            className="rounded-circle"
                            style={{ width: '100%', height: '100%' }}
                          />
                        </span>
                      </div>
                    </Link>
                    <Link to="/" className="auth-logo-dark">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logo}
                            alt=""
                            className="rounded-circle"
                            style={{ width: '100%', height: '100%' }}
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    {props.error && props.error ? (
                      <Alert color="danger">{props.error}</Alert>
                    ) : null}
                    <Formik
                      enableReinitialize={true}
                      initialValues={{
                        username: "",
                        password: "",
                      }}
                      validationSchema={Yup.object().shape({
                        username: Yup.string().required(
                          "Please Enter Your Email"
                        ),
                        password: Yup.string().required(
                          "Please Enter Valid Password"
                        ),
                      })}
                      onSubmit={(values, { setSubmitting }) => {
                        props.loginUser(values, props.history, setSubmitting)
                      }}
                    >
                      {({ errors, touched, isSubmitting }) => (

                        <Form className="form-horizontal">
                          <div className="mb-3">
                            <Label for="username" className="form-label">
                              Username / Email
                            </Label>
                            <Field
                              name="username"
                              type="text"
                              className={
                                "form-control" +
                                (errors.username && touched.username
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="username"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mb-3">
                            <Label for="password" className="form-label">
                              Password
                            </Label>
                            <div className="input-group auth-pass-inputgroup">
                              <Field
                                name="password"
                                type={passwordToggle ? "text" : "password"}
                                autoComplete="true"
                                className={
                                  "form-control" +
                                  (errors.password && touched.password
                                    ? " is-invalid"
                                    : "")
                                }
                              />
                              <button
                                className="btn btn-light "
                                type="button"
                                id="password-addon"
                                style={errors.password && touched.password ? { border: '1px solid red' } : null}
                                onClick={handleTogglePassword}
                              >
                                <i className={passwordToggle ? "mdi mdi-eye-off-outline" : "mdi mdi-eye-outline"}></i>
                              </button>
                            </div>
                            <ErrorMessage
                              style={{ display: 'block' }}
                              name="password"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customControlInline"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customControlInline"
                            >
                              Remember me
                            </label>
                          </div>

                          <div className="mt-3 d-grid">
                            <button
                              style={{ height: '44px' }}
                              className="btn btn-primary btn-block"
                              type="submit"
                            >
                              {isSubmitting ? <ButtonSpinner /> : 'Log In'}
                            </button>
                          </div>

                          <div className="mt-4 text-center">
                            <Link
                              to="/forgot-password"
                              className="text-muted"
                            >
                              <i className="mdi mdi-lock me-1" /> Forgot your
                              password?
                            </Link>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  © {new Date().getFullYear()} Zero Gravity. All Rights Reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func
}

const mapStateToProps = state => {
  const { error } = state.session
  return { error }
}

export default withRouter(
  connect(mapStateToProps, { loginUser })(Login)
)
