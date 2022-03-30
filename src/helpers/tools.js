





/**
 * 
 * @param {function} columns 
 * @param {object} record 
 * @param {object} locationState 
 */
 import EditFormatter from 'components/EditFormatter'

 export function resolveColumns(columns, record, locationState, metaData) {
     const schema = typeof columns === 'function' ? columns(record, metaData) : columns
     const section = schema && typeof schema === 'object' && schema.section || false
     const sectionColumns = section && locationState && locationState.schemaId && section.find(_ => _.schemaId === locationState.schemaId) || false
 
     return (sectionColumns && sectionColumns.columns) || (schema && schema.columns) || schema
 }
 
 export const dummyData = (fields) => Array.from(Array(10), (x, index) => {
     const columns = fields && fields.length > 0 && fields.reduce((k, el) => Object.assign({}, k, { [el.value]: '' }), {})
     return Object.assign({}, columns, { _id: index + 1, loading: true })
 })
 
 export function capitalizeFirstLetter(string) {
     return string.charAt(0).toUpperCase() + string.slice(1)
 }
 
 
 export const FormatterFor = {
     actions: EditFormatter
 }
 
 export const getStore = async (_id) => await import(`store/${_id}`)
 

 /**
 * @param {array} columns 
 */
  export function set(columns, formRecord = {}) {
    if(!columns && !formRecord) {
      return false
    }
   let Columns = columns && Object.assign([], columns)
   return Columns.reduce((a, el) => el.defaultValue ? Object.assign({}, a, { [el.value]: el.defaultValue }) : a, formRecord)
 }