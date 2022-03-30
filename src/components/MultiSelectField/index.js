/**
 * 
 * Multi Select Field
 * 
 */

 import React from 'react'
 import PropTypes from 'prop-types'
 import { Label, FormGroup } from 'reactstrap'
 import Select from "react-select"
 
 function MultiSelectField(props) {
     const { label, name, value, onChange, isInvalid, metaData, options = [] } = props
     const selectOptions = options && Array.isArray(options) ? options : typeof options === 'string' && metaData && metaData[options] && metaData[options].length > 0 ? metaData[options] : []
     
     return (
         <React.Fragment>
             <FormGroup className='no-margin'>
                 <Label htmlFor="formrow-firstname-Input">{label}</Label>
                 <Select
                     name={name}
                     value={selectOptions && selectOptions.length > 0 && value ? selectOptions.find(_ => _.value.toString() === value.toString()) : false}
                     onChange={val => onChange({value: val.map(_ => _.value)})}
                     options={selectOptions}
                     className={isInvalid ? "select2-error" : null}
                     classNamePrefix="select2-selection"
                     invalid={isInvalid ? true : false}
                     isMulti={true}
                 />
             </FormGroup>
         </React.Fragment>
     )
 
 }
 
 MultiSelectField.propTypes = {
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
 
 export default MultiSelectField