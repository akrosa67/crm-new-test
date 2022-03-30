/*
 *
 *  remotes
 *
 */

import api from '../../helpers/Api'
import constantName from './key'

export function loadRecords() {
    return api.get(`/get_all_${atob(constantName)}`).then((response) => response.data).catch((error) => Promise.reject(error))
}

/**
 * 
 * @param {string} metaData 
 * @returns 
 */
export function loadRecordsMetaData(metaData) {
    return api.get(`/get_all_${metaData}`).then((response) => response.data).catch((error) => Promise.reject(error))
}

/**
 * 
 * @param {integer} id 
 * @returns 
 */
export function loadRecord(id) {
    return api.get(`/get_${atob(constantName)}_by_id?${atob(constantName)}Id=${id}`).then((response) => response.data).catch((error) => Promise.reject(error))
}

/**
 * 
 * @param {object} record 
 * @returns 
 */
export function createRecord(record) {
    return api.post(`/add_${atob(constantName)}`, record).then((response) => response.data).catch((error) => Promise.reject(error))
}

/**
 * 
 * @param {object} record 
 * @returns 
 */
export function updateRecord(record) {
    return api.put(`/update_${atob(constantName)}_by_id`, record).then((response) => response.data).catch((error) => Promise.reject(error))
}

/**
 * 
 * @param {integer} id 
 * @returns 
 */
export function deleteRecord(id) {
    
    const request ={"FactorId": [id],"status": 3}
    return api.put(`/delete_${atob(constantName)}_by_id`, request).catch((error) => Promise.reject(error))
    // return api.delete(`/delete_${atob(constantName)}_by_id?${atob(constantName)}Id=${id}`).catch((error) => Promise.reject(error))
}

/**
 * 
 * @param {object} record
 * @returns 
 */
 export function updateStatus(record) {
    return api.put(`/delete_${atob(constantName)}_by_id`, record).catch((error) => Promise.reject(error))
}


const remotes = {
    loadRecords,
    loadRecordsMetaData,
    loadRecord,
    createRecord,
    updateRecord,
    deleteRecord,
    updateStatus
}

export default remotes
