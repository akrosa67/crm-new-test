/**
 * 
 * Radiobox Field
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Label, FormGroup } from 'reactstrap'


function RadioboxField(props) {
    const { name, label, value, onChange, options, required } = props

    return (
        <React.Fragment>
            <FormGroup className="mb-3">
                <Label htmlFor={name}>{label} {required ? <span style={{ color: 'red' }}>*</span> : null}</Label>
                <div style={{display: 'flex', width: '100%', flexWrap: 'wrap'}}>
                    {(options || []).map((opt, index) => {
                        return (<div key={index} className="form-check" style={{marginRight: '15px'}}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name={name}
                                id={`${name}-${opt.value}`}
                                value={opt.value}
                                onChange={onChange}
                                checked={value === opt.value ? true : false}
                            />
                            <label
                                className="form-check-label"
                                htmlFor={`${name}-${opt.value}`}>
                                {" "}
                                {opt.label}
                            </label>
                        </div>)
                    })}
                </div>
            </FormGroup>
        </React.Fragment>
    )
}

RadioboxField.propTypes = {
    t: PropTypes.any,
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    isInvalid: PropTypes.any,
    required: PropTypes.bool,
    options: PropTypes.array
}

export default RadioboxField