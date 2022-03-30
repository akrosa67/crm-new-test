/*
 *
 *  session sagas
 *
 */

import { call, take, put, all, delay } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { setAuthToken } from '../../helpers/Api'

import store2 from 'store2'
import {
    VERIFY_SESSION,
    LOG_IN,
    LOG_OUT,
    FORGOT_PASSWORD
} from './constants'

import {
    verifySessionSuccess,
    verifySessionError,
    logInSuccess,
    logInError,
    logOutSuccess,
    logOutError,
    forgotPasswordSuccess,
    forgotPasswordError
} from './actions'

import {
    verifySession,
    logIn,
    forgotPassword
} from './remotes'


export function* verifyInitialSessionSaga() {
    const secret = store2.get('secret')
    const location = window.location && window.location.pathname || '/'

    if (secret && !['/reset-password/'].includes(location)) {
        try {
            setAuthToken(secret)
            store2.set('secret', secret)
            const user = yield call(verifySession)
            yield put(verifySessionSuccess(user))
        } catch (error) {
            store2.remove('secret')
            yield put(verifySessionError('Session Expired!'))
            yield put(push(process.env.PUBLIC_PATH || '/'))
        }
    } else {
        try {
            yield put(logOutSuccess())
        } catch (error) {
            yield put(logOutError(error))
        } finally {
            store2.remove('secret')
            store2.remove('authUser')
        }
    }
}

export function* verifySessionSaga() {
    while (true) {
        // eslint-disable-line no-constant-condition
        const { secret } = yield take(VERIFY_SESSION)
        if (secret && !process.env.offline) {
            try {
                setAuthToken(secret)
                const user = yield call(verifySession)
                yield put(verifySessionSuccess(user))
            } catch (error) {
                yield put(verifySessionError('Session Expired!'))
            }
        }
    }
}

export function* loginSaga() {
    while (true) {
        // eslint-disable-line no-constant-condition
        const { user, history, setSubmitting } = yield take(LOG_IN)

        try {
            yield call(setSubmitting, true)

            const response = yield call(logIn, user)
            setAuthToken(response && response.sessionInfo && response.sessionInfo.token)
            yield delay(500)
            localStorage.setItem("authUser", JSON.stringify(response))
            yield put(logInSuccess(response))

            history.push("/dashboard")
        } catch (error) {
            yield put(logInError((error && error.message) || (error && typeof error === 'string' && error) || JSON.stringify(error)))
        } finally {
            yield call(setSubmitting, false)
        }
    }
}

function* logOutSaga() {

    while (true) {
        // eslint-disable-line no-constant-condition
        const { history } = yield take(LOG_OUT)

        try {
            yield put(logOutSuccess())
            history.push("/login")
        } catch (error) {
            yield put(logOutError(error))
        } finally {
            store2.remove('authUser')
        }

    }
}

export function* forgotPasswordSaga() {
    while (true) {
      // eslint-disable-line no-constant-condition
      const { record } = yield take(FORGOT_PASSWORD)
    
      try {
        const result = yield call(forgotPassword, record)
        if (result) {
          yield put(forgotPasswordSuccess(result.message))
        } else {
          yield put(forgotPasswordError('Unable to send email'))
        }
      } catch (error) {
        yield put(forgotPasswordError('Unable to send email'))
      }
    }
  }

export default function* rootSaga() {
    yield all([
        verifyInitialSessionSaga(),
        verifySessionSaga(),
        loginSaga(),
        logOutSaga(),
        forgotPasswordSaga()
    ])
}