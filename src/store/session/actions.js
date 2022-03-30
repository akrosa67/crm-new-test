/*
 *
 * Session actions
 *
 */

import {
    VERIFY_SESSION,
    VERIFY_SESSION_SUCCESS,
    VERIFY_SESSION_ERROR,
    LOG_IN,
    LOG_IN_SUCCESS,
    LOG_IN_ERROR,
    LOG_OUT,
    LOG_OUT_SUCCESS,
    LOG_OUT_ERROR,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_ERROR
} from './constants'

/**
 * @param {string} secret 
 */
export function verifySession(secret) {
    return {
        type: VERIFY_SESSION,
        secret
    }
}

/**
 * @param {object} user 
 */
export function verifySessionSuccess(user) {
    return {
        type: VERIFY_SESSION_SUCCESS,
        user
    }
}

/**
 * @param {string} error 
 */
export function verifySessionError(error) {
    return {
        type: VERIFY_SESSION_ERROR,
        error,
    }
}

/**
 * @param {string} identifier 
 * @param {string} secret 
 * @param {object} queryParams 
 * @param {string} form 
 */
export function logIn(user, history, setSubmitting) {
    return {
        type: LOG_IN,
        user,
        history,
        setSubmitting
    }
}

/**
 * @param {object} user 
 * @param {string} token 
 */
export function logInSuccess(user, token) {
    return {
        type: LOG_IN_SUCCESS,
        user,
        token
    }
}

/**
 * @param {string} error 
 */
export function logInError(error) {
    return {
        type: LOG_IN_ERROR,
        error,
    }
}

export function logOut(history) {
    return {
        type: LOG_OUT,
        history
    }
}

export function logOutSuccess() {
    return {
        type: LOG_OUT_SUCCESS,
    }
}

/**
 * @param {string} error 
 */
export function logOutError(error) {
    return {
        type: LOG_OUT_ERROR,
        error,
    }
}



/**
 * @param {object} record 
 */
export function forgotPassword(record) {
    return {
        type: FORGOT_PASSWORD,
        record
    }
}

/**
 * @param {string} success 
 */
export function forgotPasswordSuccess(success) {
    return {
        type: FORGOT_PASSWORD_SUCCESS,
        success
    }
}

/**
 * @param {string} error 
 */
export function forgotPasswordError(error) {
    return {
        type: FORGOT_PASSWORD_ERROR,
        error
    }
}


const actions = {
    verifySession,
    verifySessionSuccess,
    verifySessionError,
    logIn,
    logInSuccess,
    logInError,
    logOut,
    logOutSuccess,
    logOutError,
    forgotPassword,
    forgotPasswordSuccess,
    forgotPasswordError
}

export default actions