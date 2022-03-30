/*
 *
 * Session reducer
 *
 */

import produce from 'immer'

import {
  VERIFY_SESSION_SUCCESS,
  VERIFY_SESSION_ERROR,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  LOG_OUT_SUCCESS,
  LOG_OUT_ERROR,
  FORGOT_PASSWORD_ERROR
} from './constants'


const initialState = {
  loading: false,
  success: false,
  error: false,
  loggedIn: true,
  metaData: {}
}

/**
 * @param {object} state 
 * @param {object} action 
 */
const sessionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOG_IN_SUCCESS:
      case VERIFY_SESSION_SUCCESS:
        draft.loading = false
        draft.success = false
        draft.error = false
        draft.loggedIn = true
        draft.user = action.user
        break
      case VERIFY_SESSION_ERROR:
      case LOG_IN_ERROR:
      case FORGOT_PASSWORD_ERROR:  
        draft.loading = false
        draft.success = false
        draft.error = action.error
        draft.loggedIn = false
        draft.user = false
        break
      case LOG_OUT_ERROR:
      case LOG_OUT_SUCCESS:
        draft.loading = false
        draft.success = false
        draft.error = false
        draft.loggedIn = false
        draft.user = false
        break
    }
  })


export default sessionReducer