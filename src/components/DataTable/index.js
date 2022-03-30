import React, { Component } from "react"
import { Row, Col } from "reactstrap"
import PropTypes from "prop-types"

// datatable related plugins
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory, {
    PaginationProvider, PaginationListStandalone,
    SizePerPageDropdownStandalone
} from 'react-bootstrap-table2-paginator'
import ButtonSpinner from 'components/ButtonSpinner'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import { FormatterFor } from "./utils"
import ConfirmButton from "components/ConfirmButton"
import "./datatables.css"


class DataTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            sizePerPage: 10,
            selectedRows: [],
            btnLoader: {}
        }

        this.handleOnSelect = this.handleOnSelect.bind(this)
        this.handleOnSelectAll = this.handleOnSelectAll.bind(this)
        this.handleFormatter = this.handleFormatter.bind(this)

    }

    handleOnSelect = (row, isSelect) => {
        let { selectedRows } = this.state

        if (isSelect) {
            selectedRows.push(row)
        }
        else {
            selectedRows = selectedRows.filter(_ => _._id.toString() !== row._id.toString())
        }


        this.setState({ selectedRows })
        return true
    }
    handleOnSelectAll = (isSelect, rows) => {
        var ar = []
        if (isSelect) {
            ar = rows
        }
        else {
            ar = []
            this.setState({ selectedRows: [] })
        }

        this.setState({ selectedRows: ar })
        return true
    }

    handleFormatter = (column = {}, cellContent, row, rowIndex, metaData) => {
        // const { metaData } = this.props
        const { loading } = row || {}

        if (loading) {
            return (<p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
            </p>)
        } else if (column && column.editFormatter) {
            let FormatterComponent = FormatterFor[column.editFormatter]
            return <FormatterComponent {...this.props} record={row} formatterStyle={column.formatterStyle || {}} />
        } else if (column && column.formatter) {
            return column.formatter(cellContent, row, rowIndex, metaData)
        }

        return cellContent

    }

    render() {
        const { name, records = [], columns = [], onChangeStatus, metaData } = this.props
        
        const defaultSorted = [{
            dataField: 'id',
            order: 'asc'
        }]

        const pageOptions = {
            sizePerPage: 10,
            totalSize: records.length, // replace later with size(customers),
            custom: true,
        }


        // Select All Button operation
        const selectRow = {
            mode: 'checkbox',
            clickToSelect: false,
            clickToEdit: false,
            onSelect: this.handleOnSelect,
            onSelectAll: this.handleOnSelectAll,
            selected: this.state.selectedRows.map(_ => _._id)
        }

        const { SearchBar } = Search
        const pageColumns = columns.filter(_ => _.viewRecord).map(f => Object.assign({}, f, { dataField: f.value, text: f.label, formatter: (c, r, i) => this.handleFormatter(f, c, r, i, metaData) }))

        return (
            <React.Fragment>
                <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                    keyField='_id'
                    columns={pageColumns}
                    data={records}>
                    {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                            keyField='_id'
                            columns={pageColumns}
                            data={records}
                            search>
                            {toolkitProps => (
                                <React.Fragment>

                                    <Row className="mb-2">
                                        <Col md="4">
                                            <div className="search-box me-2 mb-2 d-inline-block">
                                                <div className="position-relative" style={{ top: '-40px' }}>
                                                    <SearchBar
                                                        {...toolkitProps.searchProps}
                                                    />
                                                    <i className="bx bx-search-alt search-icon" />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xl="12">
                                            <div className="table-responsive">
                                                <BootstrapTable
                                                    keyField={"_id"}
                                                    responsive
                                                    bordered={false}
                                                    striped={false}
                                                    defaultSorted={defaultSorted}
                                                    selectRow={selectRow}
                                                    classes={
                                                        "table align-middle table-nowrap"
                                                    }
                                                    headerWrapperClasses={"thead-light"}
                                                    {...toolkitProps.baseProps}
                                                    {...paginationTableProps}
                                                />

                                            </div>
                                        </Col>
                                    </Row>

                                    <Row className="align-items-md-center mt-30">
                                        <Col className="inner-custom-pagination d-flex">
                                            <div className="d-inline">
                                                <SizePerPageDropdownStandalone
                                                    {...paginationProps}
                                                />
                                            </div>
                                            <div className="text-md-right ms-auto">
                                                <PaginationListStandalone
                                                    {...paginationProps}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </React.Fragment>)}
                        </ToolkitProvider>)}
                </PaginationProvider>

                <Row>
                    <Col xl="12">
                        <ConfirmButton
                            body={"Do you want to delete the selected rows?"}
                            onConfirm={() => onChangeStatus && onChangeStatus(
                                { [`${name}Id`]: this.state.selectedRows.map(r => r._id), status: 3 },
                                (val) => this.setState({ btnLoader: { delete: val } }),
                                () => this.setState({ selectedRows: [] })) || null}>
                            {(open) => (<button
                                type="button"
                                onClick={open}
                                style={{ marginRight: '15px' }}
                                className="btn btn-danger">
                                {this.state.btnLoader && this.state.btnLoader['delete'] ? <ButtonSpinner /> : 'Delete'}
                            </button>)}
                        </ConfirmButton>
                        <ConfirmButton
                            body={"Do you want to active the selected rows?"}
                            onConfirm={() => onChangeStatus && onChangeStatus(
                                { [`${name}Id`]: this.state.selectedRows.map(r => r._id), status: 1 },
                                (val) => this.setState({ btnLoader: { active: val } }),
                                () => this.setState({ selectedRows: [] })) || null}>
                            {(open) => (<button
                                type="button"
                                onClick={open}
                                style={{ marginRight: '15px' }}
                                className="btn btn-success">
                                {this.state.btnLoader && this.state.btnLoader['active'] ? <ButtonSpinner /> : 'Active'}
                            </button>)}
                        </ConfirmButton>
                        <ConfirmButton
                            body={"Do you want to inactive the selected rows?"}
                            onConfirm={() => onChangeStatus && onChangeStatus(
                                { [`${name}Id`]: this.state.selectedRows.map(r => r._id), status: 2 },
                                (val) => this.setState({ btnLoader: { inactive: val } }),
                                () => this.setState({ selectedRows: [] })) || null}>
                            {(open) => (<button
                                type="button"
                                onClick={open}
                                style={{ marginRight: '15px', backgroundColor: "#556ee6", borderColor: "#556ee6" }}
                                className="btn btn-primary">
                                {this.state.btnLoader && this.state.btnLoader['inactive'] ? <ButtonSpinner /> : 'Inactive'}
                            </button>)}
                        </ConfirmButton>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

DataTable.propTypes = {
    name: PropTypes.string,
    records: PropTypes.array,
    title: PropTypes.string,
    columns: PropTypes.array,
    onChangeStatus: PropTypes.func,
    metaData: PropTypes.object
}

export default DataTable