/**
 * 
 * Delete Form
 * 
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Modal } from 'reactstrap'
import ButtonSpinner from 'components/ButtonSpinner'

function DeleteForm(props) {
    const [openDialog, setOpenDialog] = useState(false)
    const [isSubmitting, setSubmitting] = useState(false)

    const { children, id, actions, dispatch } = props

    return (
        <React.Fragment>
            {children && typeof children === 'function' ? children(() => setOpenDialog(!openDialog)) : children || null}
            <Modal
                isOpen={openDialog}
                scrollable={true}
                backdrop={'static'}>
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Confirm</h5>
                    <button type="button" className="btn-close" onClick={() => setOpenDialog(false)} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Do you want to delete this record?</p>
                </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        style={{ height: '46px' }}
                        className="btn btn-light"
                        onClick={() => setOpenDialog(false)}>
                        Close
                    </button>
                    <button
                        type="button"
                        style={{ height: '46px' }}
                        className="btn btn-primary"
                        disabled={isSubmitting}
                        onClick={() => dispatch(actions.deleteRecord(id, (val) => setSubmitting(val), () => setOpenDialog(false)))}>
                        {isSubmitting ? <ButtonSpinner /> : 'Confirm'}
                    </button>
                </div>
            </Modal>
        </React.Fragment>
    )
}

DeleteForm.propTypes = {
    t: PropTypes.any,
    children: PropTypes.func,
    id: PropTypes.string,
    actions: PropTypes.object,
    dispatch: PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(null, mapDispatchToProps)(DeleteForm)