/**
 * 
 * 
 * Button Spinner
 * 
 */

 import React from 'react'
 import ClipLoader from 'react-spinners/ClipLoader'
 import PropTypes from 'prop-types'


 const ButtonSpinner = ({ color, style, className }) => {
 
     return (<div className={`skote-spinner ${className || null}`} style={style}>
         <ClipLoader color={color || '#fff'} width="30" height="30" />
     </div>)
 }
 
 ButtonSpinner.propTypes = {
     t: PropTypes.any,
     color: PropTypes.string,
     style: PropTypes.object,
     className: PropTypes.string
 }

 export default ButtonSpinner
 