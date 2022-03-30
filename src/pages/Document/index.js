/**
 * 
 * Document Page
 * 
 */


import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import DataTable from 'components/DataTable'
import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags'
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  // CardTitle
} from "reactstrap"
import { ToastContainer, toast } from 'react-toastify'
import { resolveColumns, dummyData } from '../../helpers/tools'

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Create Form
import CreateForm from '../../components/CreateForm'

//Import Styles
import "./styles.scss"

function Document(props) {

  const { columns = [], title, dispatch, actions = {}, records = [], error, access, metaData, loading, formTitle, success } = props
  const fields = resolveColumns(columns)

  useEffect(() => {
    dispatch(actions.loadRecords())
  }, [])

  useEffect(() => {
    if (error) {
      toast.error(error, { onClose: () => dispatch(actions.loadRecordsCacheHit()) })
    } else if (success) {
      toast.success(success, { onClose: () => dispatch(actions.loadRecordsCacheHit()) })
    }
  }, [error, success])

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>{title} | Zero Gravity CRM</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={'Master'}
            breadcrumbItem={title}
          />

          <Row>
            <Col xs={12}>
              <Card>
                <CardBody>
                  <Row style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <Col style={{ flex: '1 2', display: 'flex', justifyContent: 'flex-end' }}>
                      {access.includes('post') ?
                        <CreateForm
                          title={`Manage ${formTitle}`}
                          formTitle={`Add ${formTitle}`}
                          fields={fields.filter(_ => _.editRecord)}
                          error={error}
                          metaData={metaData}
                          onSubmit={(data, setSubmitting, redirect) => dispatch(actions.createRecord(Object.assign({}, data, { _id: Math.random().toString(), status: 1 }), setSubmitting, redirect))}>
                          {(openModal) => (
                            <Button
                              onClick={openModal}
                              color="primary">
                              {`Add ${title}`}
                            </Button>)}
                        </CreateForm> : null}
                    </Col>
                  </Row>
                  <DataTable
                    {...props}
                    records={loading && records.length === 0 ? dummyData(fields) : records}
                    columns={fields}
                    onChangeStatus={(data, setSubmitting, redirect) => {
                      if (data && data.companyId && data.companyId.length > 0) {
                        dispatch(actions.updateStatus(data, setSubmitting, redirect))
                      } else {
                        toast.error("Please select the rows", { onClose: () => dispatch(actions.loadRecordsCacheHit()) })
                      }
                    }}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </React.Fragment>
  )

}

Document.propTypes = {
  t: PropTypes.any,
  name: PropTypes.string,
  records: PropTypes.array,
  dispatch: PropTypes.func,
  columns: PropTypes.func,
  title: PropTypes.string,
  actions: PropTypes.object,
  error: PropTypes.any,
  access: PropTypes.array,
  metaData: PropTypes.object,
  loading: PropTypes.any,
  formTitle: PropTypes.string,
  success: PropTypes.string
}

/**
 * 
 * @param {object} state 
 * @param {object} param1 
 * @returns 
 */
const mapStateToProps = (state, { selectors }) => {
  const {
    selectError,
    selectLoading,
    selectRecords,
    selectRecordsMetaData,
    selectSuccess
  } = selectors

  return {
    error: selectError()(state),
    loading: selectLoading()(state),
    records: selectRecords()(state),
    metaData: selectRecordsMetaData()(state),
    success: selectSuccess()(state)
  }
}

/**
 * 
 * @param {function} dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Document)
