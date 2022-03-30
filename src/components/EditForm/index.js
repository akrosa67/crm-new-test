/**
 * 
 * Edit Form
 * 
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from '../DynamicForm'
import { connect } from 'react-redux'

function EditForm(props) {
    const [openModal, setOpenModal] = useState(false)

    const { children, actions, dispatch } = props

    return (
        <React.Fragment>
            {children ? children(() => setOpenModal(!openModal)) : null}
            {openModal ?
                <Form
                    {...props}
                    onCancel={() => setOpenModal(!openModal)}
                    onSubmit={(submitValues, setSubmitting) => {
                        dispatch(actions.updateRecord(submitValues, setSubmitting, () => setOpenModal(!openModal)))
                    }} /> : null}
        </React.Fragment>
    )


}

EditForm.propTypes = {
    children: PropTypes.func,
    dispatch: PropTypes.func,
    actions: PropTypes.object
}

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

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)