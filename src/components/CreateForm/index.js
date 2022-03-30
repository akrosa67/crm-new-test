/**
 * 
 * Create Form
 * 
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from '../DynamicForm'

function CreateForm(props) {
    const [openModal, setOpenModal] = useState(false)
    const { children } = props
    return (
        <React.Fragment>
            {children ? children(() => setOpenModal(!openModal)) : null}
            {openModal ? <Form {...props} onCancel={() => setOpenModal(!openModal)} /> : null}
        </React.Fragment>
    )
}

CreateForm.propTypes = {
    children: PropTypes.func
}

export default CreateForm