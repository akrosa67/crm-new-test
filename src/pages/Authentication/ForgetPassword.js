import PropTypes from "prop-types"
import React from "react"
import { Alert, Card, CardBody, Col, Container, Label, Row } from "reactstrap"

// Redux
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

// action
import { forgotPassword as userForgetPassword } from "../../store/session/actions"

// import images
import profile from "../../assets/images/profile-img.png"
import logo from "../../assets/images/logo.svg"

function ForgetPasswordPage (props) {
  
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
                    <div>
                      <Link to="/">
                        <div className="avatar-md profile-user-wid mb-4">
                          <span className="avatar-title rounded-circle bg-light">
                            <img
                              src={logo}
                              alt=""
                              className="rounded-circle"
                              height="34"
                            />
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="p-2">
                      {props.error && props.error ? (
                        <Alert color="danger" style={{ marginTop: "13px" }}>
                          {props.error}
                        </Alert>
                      ) : null}
                      {props.success ? (
                        <Alert color="success" style={{ marginTop: "13px" }}>
                          {props.success}
                        </Alert>
                      ) : null}

                      <Formik
                        enableReinitialize={true}
                        initialValues={{
                          email: "",
                        }}
                        validationSchema={Yup.object().shape({
                          email: Yup.string().required(
                            "Please Enter Your Email"
                          ),
                        })}
                        onSubmit={values => {
                          props.userForgetPassword(values, props.history)
                        }}
                      >
                        {({ errors, touched }) => (
                          <Form className="form-horizontal">
                            <div className="mb-3">
                              <Label for="email" className="form-label">
                                Email
                              </Label>
                              <Field
                                name="email"
                                type="text"
                                className={
                                  "form-control" +
                                  (errors.email && touched.email
                                    ? " is-invalid"
                                    : "")
                                }
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            <div className="text-end">
                              <button
                                className="btn btn-primary w-md"
                                type="submit"
                              >
                                Reset
                              </button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center">
                  <p>
                    Go back to{" "}
                    <Link to="login" className="fw-medium text-primary">
                      Login
                    </Link>{" "}
                  </p>
                  <p>
                    © {new Date().getFullYear()} Zero Gravity.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
}

ForgetPasswordPage.propTypes = {
  error: PropTypes.func,
  success: PropTypes.string,
  history: PropTypes.object,
  userForgetPassword: PropTypes.any,
}

const mapStateToProps = state => {
  const { error, success } = state.session
  return { error, success }
}

export default withRouter(
  connect(mapStateToProps, { userForgetPassword })(ForgetPasswordPage)
)