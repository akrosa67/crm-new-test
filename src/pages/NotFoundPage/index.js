import React from "react"
import MetaTags from 'react-meta-tags'
import { Link } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"

//Import Images
import error from "../../assets/images/error-img.png"

function NotFoundPage () {
    return (
      <React.Fragment>
        <div className="account-pages my-5 pt-5">
        <MetaTags>
            <title>404 Error Page | Zero Gravity CRM</title>
          </MetaTags>
          <Container style={{marginTop: '45px'}}>
            <Row>
              <Col lg="12">
                <div className="text-center mb-5">
                  <h1 className="display-2 fw-medium">
                    4
                    <i className="bx bx-buoy bx-spin text-primary display-3"/>
                    4
                  </h1>
                  <h4 className="text-uppercase">Sorry, page not found</h4>
                  <div className="mt-5 text-center">
                    <Link
                      className="btn btn-primary"
                      to="/"
                    >
                      Back to Home Page
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md="8" xl="6">
                <div>
                  <img src={error} alt="" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
}

export default NotFoundPage
