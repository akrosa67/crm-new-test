/**
 * 
 * Menu Page
 * 
 */


import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags'
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardBody,
    // CardTitle
} from "reactstrap"
import { ToastContainer, toast } from 'react-toastify'
import { resolveColumns, set, capitalizeFirstLetter } from '../../helpers/tools'

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import ResponsiveTree from "../../components/ResponsiveTree"

//Import Create Form
import CreateForm from '../../components/CreateForm'

import EditFormatter from 'components/EditFormatter'

//Import Styles
import "./styles.scss"

function Menu(props) {
    const { columns = [], title, dispatch, actions = {}, records = [], error, access, metaData, loading, formTitle, success } = props

    const [formRecord, setFormRecord] = useState({})
    const fields = resolveColumns(columns, formRecord)
    const initialValues = set(fields, formRecord)
    
    useEffect(() => {
        dispatch(actions.loadRecords())
    }, [])

    useEffect(() => {
        if (error) {
            toast.error(error, { onClose: () => dispatch(actions.loadRecordsCacheHit()) })
        } else if (success) {
            toast.success(success, { onClose: () => dispatch(actions.loadRecordsCacheHit()) })
        }
    }, [error, success])


    const menuHeader = records.find(r => r._id === 'menuHeader') && records.find(r => r._id === 'menuHeader').menu
    const menuSubHeader = records.find(r => r._id === 'menuSubHeader') && records.find(r => r._id === 'menuSubHeader').menu
    const menuItem = records.find(r => r._id === 'menuItem') && records.find(r => r._id === 'menuItem').menu

    const titleFormatter = (title, record) => {
        return <div style={{ display: 'flex', alignItems: 'center' }}>
            <h5>{capitalizeFirstLetter(title)}</h5>
            <EditFormatter
                {...props}
                record={record}
                editBtnStyle={{
                    display: 'flex',
                    width: '28px',
                    height: '28px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: '10px',
                    marginRight: '10px'
                }}
                deleteBtnStyle={{
                    display: 'flex',
                    width: '28px',
                    height: '28px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '10px'
                }} />
        </div>
    }

    const recordsTree = menuHeader && menuHeader.length > 0 && menuHeader.reduce((a, el) => {
        const subMenu = menuSubHeader && menuSubHeader.length > 0 && menuSubHeader.filter(s => s.menuReferenceId.toString() === el._id.toString()) || []
        if (subMenu && subMenu.length > 0) {
            const children = subMenu.reduce((arr, item) => {
                const subMenuItem = menuItem && menuItem.length > 0 && menuItem.filter(m => m.menuReferenceId.toString() === item._id.toString()) || []
                if (subMenuItem && subMenuItem.length > 0) {
                    const childrenItems = menuItem.filter(m => m.menuReferenceId.toString() === item._id.toString()).map(k => Object.assign({}, k, { title: titleFormatter(k.menuName, k) }))
                    arr.push(Object.assign({}, item, { title: titleFormatter(item.menuName, item), children: childrenItems, expanded: false }))
                } else {
                    arr.push(Object.assign({}, item, { title: titleFormatter(item.menuName, item), expanded: false }))
                }

                return arr
            }, [])
            a.push(Object.assign({}, el, { title: titleFormatter(el.menuName, el), children, expanded: false }))
        } else {
            a.push(Object.assign({}, el, { title: titleFormatter(el.menuName, el), expanded: false }))
        }

        return a
    }, []) || []

   

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>{title} | Zero Gravity CRM</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs
                        title={'Master'}
                        breadcrumbItem={title}
                    />

                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardBody>
                                    <Row style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                        <Col style={{ flex: '1 2', display: 'flex', justifyContent: 'flex-end' }}>
                                            {access.includes('post') ?
                                                <CreateForm
                                                    initialValues={initialValues}
                                                    title={`Manage ${formTitle}`}
                                                    formTitle={`Add ${formTitle}`}
                                                    fields={fields.filter(_ => _.editRecord)}
                                                    error={error}
                                                    metaData={metaData}
                                                    onChange={(data) => setFormRecord(data)}
                                                    onSubmit={(data, setSubmitting, redirect) => {
                                                        setFormRecord({})
                                                        dispatch(actions.createRecord(Object.assign({}, data, { _id: Math.random().toString(), status: 1 }), setSubmitting, redirect))}
                                                    }>
                                                    {(openModal) => (
                                                        <Button
                                                            onClick={openModal}
                                                            color="primary">
                                                            {`Add ${title}`}
                                                        </Button>)}
                                                </CreateForm> : null}
                                        </Col>
                                    </Row>
                                    <ResponsiveTree
                                        {...props}
                                        records={recordsTree}
                                        loading={loading}
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
        </React.Fragment>
    )

}

Menu.propTypes = {
    t: PropTypes.any,
    name: PropTypes.string,
    records: PropTypes.array,
    dispatch: PropTypes.func,
    columns: PropTypes.func,
    title: PropTypes.string,
    actions: PropTypes.object,
    error: PropTypes.any,
    access: PropTypes.array,
    metaData: PropTypes.object,
    loading: PropTypes.any,
    formTitle: PropTypes.string,
    success: PropTypes.string
}

/**
 * 
 * @param {object} state 
 * @param {object} param1 
 * @returns 
 */
const mapStateToProps = (state, { selectors }) => {
    const {
        selectError,
        selectLoading,
        selectRecords,
        selectRecordsMetaData,
        selectSuccess
    } = selectors

    return {
        error: selectError()(state),
        loading: selectLoading()(state),
        records: selectRecords()(state),
        metaData: selectRecordsMetaData()(state),
        success: selectSuccess()(state)
    }
}

/**
 * 
 * @param {function} dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)