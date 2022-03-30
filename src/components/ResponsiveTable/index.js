import React, { Component } from "react"
import PropTypes from "prop-types"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator"
import ToolkitProvider from "react-bootstrap-table2-toolkit"

import { Card, CardBody } from "reactstrap"



function ResponsiveTable (props) {
    const { records = [], columns = [] } = props
    
    //pagination customization
    const pageOptions = {
      sizePerPage: 6,
      totalSize: records.length, // replace later with size(Order),
      custom: true,
    }

    const defaultSorted = [{
      dataField: 'orderId',
      order: 'desc'
    }]

    // const selectRow = {
    //   mode: 'checkbox',
    // }

    return (
      <React.Fragment>
        <Card>
          <CardBody style={{padding: '0px'}}>
            <PaginationProvider
              pagination={paginationFactory(pageOptions)}
              keyField='id'
              columns={columns}
              data={records}>
              {({ paginationProps, paginationTableProps }) => (
                <ToolkitProvider
                  keyField="id"
                  data={records}
                  columns={columns}  
                  bootstrap4
                  search>
                  {toolkitProps => (
                    <React.Fragment>
                      <div className="table-responsive">
                        <BootstrapTable
                          {...toolkitProps.baseProps}
                          {...paginationTableProps}
                          responsive
                          defaultSorted={defaultSorted}
                          bordered={false}
                          striped={false}
                          classes={
                            "table align-middle table-nowrap table-check"
                          }
                          headerWrapperClasses={"table-light"}
                        />
                      </div>
                      <div className="pagination pagination-rounded justify-content-end">
                        <PaginationListStandalone
                          {...paginationProps}
                        />
                      </div>
                    </React.Fragment>
                  )}
                </ToolkitProvider>
              )}
            </PaginationProvider>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  
}


ResponsiveTable.propTypes = {
    records: PropTypes.array,
    title: PropTypes.string,
    columns: PropTypes.array
}

export default ResponsiveTable