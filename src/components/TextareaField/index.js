/**
 * 
 * Textarea Field
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Label, Input, FormGroup } from 'reactstrap'


function TextareaField(props) {
    const { label, name, value, placeholder, onChange, isInvalid, required } = props

    return (
        <React.Fragment>
            <FormGroup className='no-margin'>
                <Label htmlFor={name}>{label} {required ? <span style={{ color: 'red' }}>*</span> : null}</Label>
                <Input
                    type="textarea"
                    className="form-control"
                    name={name}
                    value={value}
                    onChange={onChange}
                    id={name}
                    placeholder={placeholder}
                    maxLength="225"
                    rows="3"
                    invalid={isInvalid ? true : false}
                />
            </FormGroup>
        </React.Fragment>
    )
}

TextareaField.propTypes = {
    t: PropTypes.any,
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    isInvalid: PropTypes.any,
    required: PropTypes.bool
}

export default TextareaField