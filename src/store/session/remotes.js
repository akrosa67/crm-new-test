/*
 *
 *  session remotes
 *
 */

import api from '../../helpers/Api'

export function verifySession() {
  return api
    .get(`/users/me`)
    .then(response => response.data && response.data.data)
    .catch(error => Promise.reject(error))
}

/**
 * @param {string} email 
 * @param {string} password 
 * @param {object} queryParams 
 * @param {boolean} sessionLogin 
 */
export function logIn(user) {
  return api
    .post(`/login`, user)
    .then(response => response.data && response.data.data)
    .catch(error => Promise.reject(error))
}


export function logOut() {
  return api
    .delete(`/session`)
    .then(response => response.data)
    .catch(error => Promise.reject(error))
}


/**
 * @param {object} record 
 */
 export function forgotPassword(record) {
  return api
    .post(`/forget-paasword`, record)
    .then(response => response.data)
    .catch(error => Promise.reject(error))
}


const remotes = {
  verifySession,
  logIn,
  logOut,
  forgotPassword
}

export default remotes