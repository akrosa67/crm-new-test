/**
 * 
 * Select Field
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Label, FormGroup } from 'reactstrap'
import Select from "react-select"

function SelectField(props) {
    const { label, name, value, onChange, isInvalid, metaData, options = [] } = props
    const selectOptions = options && Array.isArray(options) ? options : typeof options === 'string' && metaData && metaData[options] && metaData[options].length > 0 ? metaData[options] : []
    const isOptions = selectOptions && selectOptions.length > 0 && selectOptions.find(_ => _.options) && selectOptions.reduce((a, el) => {
        return [...a, ...el.options]
    }, []) || false

    return (
        <React.Fragment>
            <FormGroup className='no-margin'>
                <Label htmlFor={name}>{label}</Label>
                <Select
                    name={name}
                    value={isOptions && value ? isOptions.find(_ => _.value.toString() === value.toString()) : selectOptions && selectOptions.length > 0 && value ? selectOptions.find(_ => _.value.toString() === value.toString()) : false}
                    onChange={onChange}
                    options={selectOptions}
                    className={isInvalid ? "select2-error" : null}
                    classNamePrefix="select2-selection"
                    invalid={isInvalid ? true : false}
                />
            </FormGroup>
        </React.Fragment>
    )

}

SelectField.propTypes = {
    t: PropTypes.any,
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    isInvalid: PropTypes.any,
    metaData: PropTypes.object,
    options: PropTypes.any
}

export default SelectField