/*
 *
 *  remotes
 *
 */

import api from '../../helpers/Api'
import constantName from './key'

export function loadRecords() {
    return api.post(`/get_all_${atob(constantName)}`).then((response) => response.data).catch((error) => Promise.reject(error))
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
    return api.get(`/get_${atob(constantName)}_by_id?subSourceId=${id}`).then((response) => response.data).catch((error) => Promise.reject(error))
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
    return api.put(`/delete_${atob(constantName)}_by_id`,{"subSourceId":[id],"status":3}).catch((error) => Promise.reject(error))
}

/**
 * 
 * @param {object} record
 * @returns 
 */
 export function updateStatus(record) {
    return api.put(`/delete_${atob(constantName)}_by_id`, {"subSourceId":record.process_statusId,"status":record.status}).catch((error) => Promise.reject(error))
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
