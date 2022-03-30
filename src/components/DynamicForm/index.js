/**
 * 
 * Dynamic Form
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'
import {
    Card,
    CardBody,
    CardHeader,
    CardText,
    Col,
    Row,
    Alert
} from "reactstrap"
import { ImplementationFor } from './utils'
import { Formik, Form } from "formik"
import * as Yup from "yup"
import ButtonSpinner from 'components/ButtonSpinner'
import SimpleBar from "simplebar-react"

function DynamicForm(props) {
    const { fields = [], onCancel, onSubmit, initialValues = {}, onChange, error, metaData, formTitle, submitBtnText, title, formatterStyle } = props

    return (
        <React.Fragment>
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                validationSchema={
                    Yup.object().shape(fields.filter(_ => _.required).reduce((a, el) => Object.assign({}, a, { [el.value]: Yup.string().required(`${el.label} is required`) }), {}))
                }
                onSubmit={(values, { setSubmitting }) => {
                    onSubmit(values, setSubmitting, onCancel)
                }}>
                {({ values, errors, handleSubmit, setFieldValue, isSubmitting, touched, setFieldTouched }) => (
                    <Form onSubmit={handleSubmit} className="form-horizontal">
                        <div className="simple-right-bar" style={formatterStyle}>
                            <SimpleBar>
                                <div className="modal-header simple-modal-header">
                                    <h5 className="modal-title mt-0" id="myModalLabel">
                                        {title}
                                    </h5>
                                    <button
                                        type="button"
                                        onClick={onCancel}
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close">
                                        <span aria-hidden="true">&times</span>
                                    </button>
                                </div>
                                <div className="modal-body simple-modal-body">
                                    <Row className="simple-form-row">
                                        <Card>
                                            <CardHeader className="h5 bg-transparent border-bottom text-uppercase">{formTitle || ''}</CardHeader>
                                            <CardBody>
                                                <CardText style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                    {(fields || []).map((field, index) => {
                                                        const InputComponent = ImplementationFor[field.type]
                                                        return <Col key={index} className="mb-3" item xs={12} {...field.colProps || {}}>
                                                            <InputComponent
                                                                {...field}
                                                                name={field.value}
                                                                value={values[field.value]}
                                                                isInvalid={errors[field.value] && touched[field.value]}
                                                                metaData={metaData}
                                                                onChange={(e) => {
                                                                    setFieldTouched(field.value)
                                                                    setFieldValue(field.value, (field.type === 'select') || (field.type === 'multiSelect') ? e.value : field.type === 'checkbox' ? e.target.checked : e.target.value)
                                                                    if (onChange)
                                                                        onChange(Object.assign({}, values, { [field.value]: (field.type === 'select') || (field.type === 'multiSelect') ? e.value : field.type === 'checkbox' ? e.target.checked : e.target.value }))
                                                                }} />
                                                            <div className="invalid-feedback" style={{ display: 'block' }}>
                                                                {errors[field.value] && touched[field.value]
                                                                    ? errors[field.value] : null}
                                                            </div>
                                                        </Col>
                                                    })}
                                                    <Col className="mb-3" item xs={12}>
                                                        {error ? <div className="mb-3">
                                                            <Alert color="danger" role="alert">
                                                                {error && typeof error === 'object' ? JSON.stringify(error) : error}
                                                            </Alert>
                                                        </div> : null}
                                                    </Col>
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </Row>
                                </div>
                                <div className="modal-footer simple-modal-footer">
                                    {onCancel && typeof onCancel === 'function' ? <button
                                        onClick={onCancel}
                                        type="button"
                                        className="btn btn-danger btn-label simple-form-cancel-btn">
                                        <i className="bx bx-block label-icon "></i>Cancel
                                    </button> : null}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-success btn-label simple-form-submit-btn">
                                        <i className="bx bx-check-double label-icon"></i>
                                        {isSubmitting ? <ButtonSpinner /> : submitBtnText || 'Submit'}
                                    </button>
                                </div>
                            </SimpleBar>
                        </div>
                        <div className="simple-right-bar-overlay" />
                    </Form>
                )}
            </Formik>
        </React.Fragment>
    )

}

DynamicForm.propTypes = {
    t: PropTypes.any,
    fields: PropTypes.array,
    onCancel: PropTypes.func,
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func,
    error: PropTypes.any,
    metaData: PropTypes.object,
    formTitle: PropTypes.string,
    submitBtnText: PropTypes.string,
    title: PropTypes.string,
    onChange: PropTypes.func,
    formatterStyle: PropTypes.object
}

export default DynamicForm