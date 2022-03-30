/*
 *
 * Session constants
 *
 */

export const VERIFY_SESSION = 'app/session/VERIFY_SESSION'
export const VERIFY_SESSION_SUCCESS = 'app/session/VERIFY_SESSION_SUCCESS'
export const VERIFY_SESSION_ERROR = 'app/session/VERIFY_SESSION_ERROR'

export const LOG_IN = 'app/session/LOG_IN'
export const LOG_IN_SUCCESS = 'app/session/LOG_IN_SUCCESS'
export const LOG_IN_ERROR = 'app/session/LOG_IN_ERROR'

export const LOG_OUT = 'app/session/LOG_OUT'
export const LOG_OUT_SUCCESS = 'app/session/LOG_OUT_SUCCESS'
export const LOG_OUT_ERROR = 'app/session/LOG_OUT_ERROR'

export const FORGOT_PASSWORD = 'app/session/FORGOT_PASSWORD'
export const FORGOT_PASSWORD_SUCCESS = 'app/session/FORGOT_PASSWORD_SUCCESS'
export const FORGOT_PASSWORD_ERROR = 'app/session/FORGOT_PASSWORD_ERROR'

export const ROUTER = '@@router/LOCATION_CHANGE'


const constants = {
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
}

export default constants