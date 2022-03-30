/**
 * 
 * Confirm Button
 * 
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'reactstrap'

class ConfirmButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openDialog: false
        }
    }

    render() {
        const { children, body, onConfirm } = this.props

        return (
            <React.Fragment>
                {children && typeof children === 'function' ? children(() => this.setState({ openDialog: true })) : children || null}
                <Modal
                    isOpen={this.state.openDialog}
                    scrollable={true}
                    backdrop={'static'}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Confirm</h5>
                        <button type="button" className="btn-close" onClick={() =>
                            this.setState({ openDialog: false })
                        } aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{body}</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            style={{ height: '46px' }}
                            className="btn btn-light"
                            onClick={() => this.setState({ openDialog: false })}>
                            Close
                        </button>
                        <button
                            type="button"
                            style={{ height: '46px' }}
                            className="btn btn-primary"
                            onClick={() => {
                                this.setState({ openDialog: false })
                                if(onConfirm)
                                    onConfirm()
                            }}>
                            Confirm
                        </button>
                    </div>
                </Modal>
            </React.Fragment>
        )
    }
}

ConfirmButton.propTypes = {
    t: PropTypes.any,
    children: PropTypes.func,
    body: PropTypes.string,
    onConfirm: PropTypes.func
}


export default ConfirmButton