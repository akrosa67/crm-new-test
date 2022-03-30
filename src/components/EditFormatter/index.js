
/**
 * 
 * Edit Form
 * 
 */

import React, { useState } from 'react'
import PropTypes from "prop-types"
import EditForm from '../EditForm'
import DeleteForm from '../DeleteForm'
import { resolveColumns, set } from 'helpers/tools'


const EditFormatter = (props) => {
    const { title, columns = {}, access = [], actions = {}, selectors = {}, record = {}, editBtnStyle = { marginRight: '15px' }, deleteBtnStyle = {}, formatterStyle } = props
    const [formRecord, setFormRecord] = useState({})
    const fields = resolveColumns(columns, Object.assign({}, record, formRecord))
    const initialValues = set(fields, Object.assign({}, record, formRecord))

    if (record.loading) {
        return <p className="card-text placeholder-glow" style={{display: 'flex'}}>
            <span className="placeholder col-2"></span>
            <span className="placeholder col-2" style={{marginLeft: '25px'}}></span>
        </p>
    }

    return <React.Fragment>
        {access.includes('put') ? <EditForm
            key={`edit_${record._id}`}
            title={`Edit ${title}`}
            formTitle={`Edit ${title}`}
            initialValues={initialValues}
            formatterStyle={formatterStyle}
            fields={fields.filter(_ => _.editRecord)}
            selectors={selectors}
            onChange={(data) => setFormRecord(data)}
            submitBtnText="Update"
            actions={actions}>
            {(openModal) => (
                <button
                type="button"
                onClick={openModal}
                style={editBtnStyle}
                className="btn btn-success">
                <i className="mdi mdi-pencil d-block font-size-16"></i>
              </button>)}
        </EditForm> : null}
        {access.includes('delete') ? <DeleteForm
            key={`delete_${record._id}`}
            title={`Delete ${title}`}
            id={record._id}
            actions={actions}>
            {(openDialog) => (
                 <button
                 onClick={openDialog}
                 type="button"
                 style={deleteBtnStyle}
                 className="btn btn-danger">
                 <i className="mdi mdi-trash-can d-block font-size-16"></i>
               </button>)}
        </DeleteForm> : null}
    </React.Fragment>
}

EditFormatter.propTypes = {
    title: PropTypes.string,
    columns: PropTypes.object,
    access: PropTypes.array,
    actions: PropTypes.object,
    selectors: PropTypes.object,
    record: PropTypes.object,
    editBtnStyle: PropTypes.object,
    deleteBtnStyle: PropTypes.object,
    formatterStyle: PropTypes.object
}

export default EditFormatter