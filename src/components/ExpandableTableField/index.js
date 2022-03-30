/**
 * 
 * 
 * Expandable Table Field
 * 
 */


import React from 'react'
import PropTypes from 'prop-types'
import { Label, FormGroup } from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import './table.css'


function ExpandableTableField(props) {
    const { name, label, required, metaData } = props
    const { menuHeaderOptions, menuSubHeaderOptions, accessList } = metaData
   
    const tableColumns = (accessList || []).reduce((a, el) => {
        a.push({
          dataField: el._id,
          text: el.accessName
        })
        return a
      }, [ 
        {
          dataField: 'menuName',
          text: 'Menu List'
        }
      ])

      const subMenuColumns = (accessList || []).reduce((a, el) => {
        a.push({
          dataField: el._id,
          text: '',
          formatter: () => (<input type="checkbox" />)
        })
        return a
      }, [
        {
          dataField: 'menuName',
          text: ''
        }
      ])
    

    const expandRow = {
        renderer: (row) => {
            const filterOptions = (menuSubHeaderOptions || []).filter(s => s.menuReferenceId.toString() === row._id)
            return filterOptions && filterOptions.length > 0 ? (
                <BootstrapTable
                keyField="_id"
                data={filterOptions}
                columns={subMenuColumns}
                expandRow={false}
            />
            ) : null
        },
        showExpandColumn: true,
        expandColumnRenderer: ({ expanded }) => {
            return (<div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <i style={{fontSize: '22px'}} className={`bx ${expanded ? 'bx-chevron-down' : 'bx-cookie'}`} />
            </div>)
        },
        expandHeaderColumnRenderer: ({isAnyExpands}) => {
            return (<div className={`${isAnyExpands ? 'bg-add' : null}`}>&nbsp;</div>)
        }
    }


    return (
        <React.Fragment>
            <FormGroup className='no-margin'>
                <Label htmlFor={name}>{label} {required ? <span style={{ color: 'red' }}>*</span> : null}</Label>
                <BootstrapTable
                    keyField="_id"
                    data={menuHeaderOptions}
                    columns={tableColumns}
                    expandRow={expandRow}
                />
            </FormGroup>
        </React.Fragment>)
}

ExpandableTableField.propTypes = {
    t: PropTypes.any,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool,
    metaData: PropTypes.object
}

export default ExpandableTableField