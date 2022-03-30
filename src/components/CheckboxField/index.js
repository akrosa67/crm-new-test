/**
 * 
 * Checkbox Field
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Label, Input, FormGroup } from 'reactstrap'


function CheckboxField(props) {
    const { label, name, value, onChange, isInvalid, required } = props
    
    return (
        <React.Fragment>
            <FormGroup className="mb-3">
                <div className="form-check">
                    <Label
                        className="form-check-label"
                        htmlFor={name}>
                        {" "}
                        {label} {required ? <span style={{color: 'red'}}>*</span> : null}
                    </Label>
                    <Input
                        type="checkbox"
                        className="form-check-input"
                        id={name}
                        name={name}
                        onChange={onChange}
                        isInvalid={isInvalid}
                        checked={value}
                    />
                </div>
            </FormGroup>
        </React.Fragment>
    )
}

CheckboxField.propTypes = {
    t: PropTypes.any,
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    isInvalid: PropTypes.any,
    required: PropTypes.bool
}

export default CheckboxField