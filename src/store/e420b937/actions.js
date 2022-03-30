/*
 *
 *  actions
 *
 */


import {
  LOAD_RECORD,
  LOAD_RECORD_SUCCESS,
  LOAD_RECORD_ERROR,
  LOAD_RECORDS,
  LOAD_RECORDS_SUCCESS,
  LOAD_RECORDS_ERROR,
  CREATE_RECORD,
  CREATE_RECORD_SUCCESS,
  CREATE_RECORD_ERROR,
  UPDATE_RECORD,
  UPDATE_RECORD_SUCCESS,
  UPDATE_RECORD_ERROR,
  DELETE_RECORD,
  DELETE_RECORD_SUCCESS,
  DELETE_RECORD_ERROR,
  LOAD_RECORDS_VALID_CACHE,
  LOAD_RECORDS_META_DATA,
  LOAD_RECORDS_META_DATA_SUCCESS,
  LOAD_RECORDS_META_DATA_ERROR,
  UPDATE_STATUS,
  UPDATE_STATUS_SUCCESS,
  UPDATE_STATUS_ERROR
} from './constants'


export function loadRecordsCacheHit() {
  return {
    type: LOAD_RECORDS_VALID_CACHE
  }
}


/**
 * @param {boolean} invalidateCache 
 */
export function loadRecords(invalidateCache) {
  return {
    type: LOAD_RECORDS,
    invalidateCache
  }
}

/**
 * @param {array} records 
 */
export function loadRecordsSuccess(records) {
  return {
    type: LOAD_RECORDS_SUCCESS,
    records 
  }
}

/**
 * @param {string} error 
 */
export function loadRecordsError(error) {
  return {
    type: LOAD_RECORDS_ERROR,
    error
  }
}


/**
 * @param {integer} id 
 */
export function loadRecord(id) {
  return {
    type: LOAD_RECORD,
    id
  }
}

/**
 * @param {object} record 
 * @param {object} recordsMetaData
 */
export function loadRecordSuccess(record, recordsMetaData) {
  return {
    type: LOAD_RECORD_SUCCESS,
    record,
    recordsMetaData
  }
}

/**
 * @param {string} error 
 */
export function loadRecordError(error) {
  return {
    type: LOAD_RECORD_ERROR,
    error
  }
}

/**
 * 
 * @param {object} record 
 * @param {function} setSubmitting 
 * @param {function} redirect 
 * @returns 
 */
export function createRecord(record, setSubmitting, redirect) {
  return {
    type: CREATE_RECORD,
    record,
    setSubmitting,
    redirect
  }
}

/**
 * 
 * @param {object} record 
 * @param {string} success 
 * @returns 
 */
export function createRecordSuccess(record, success) {
  return {
    type: CREATE_RECORD_SUCCESS,
    record,
    success
  }
}

/**
 * @param {string} error 
 */
export function createRecordError(error) {
  return {
    type: CREATE_RECORD_ERROR,
    error
  }
}

/**
 * 
 * @param {object} record 
 * @param {function} setSubmitting 
 * @param {function} redirect 
 * @returns 
 */
export function updateRecord(record, setSubmitting, redirect) {
  return {
    type: UPDATE_RECORD,
    record,
    setSubmitting,
    redirect
  }
}

/**
 * 
 * @param {object} record 
 * @param {string} success 
 * @returns 
 */
export function updateRecordSuccess(record, success) {
  return {
    type: UPDATE_RECORD_SUCCESS,
    record,
    success
  }
}

/**
 * @param {string} error 
 */
export function updateRecordError(error) {
  return {
    type: UPDATE_RECORD_ERROR,
    error
  }
}

/**
 * 
 * @param {string} id 
 * @param {function} setSubmitting 
 * @param {function} redirect 
 * @returns 
 */
export function deleteRecord(id, setSubmitting, redirect) {
  return {
    type: DELETE_RECORD,
    id,
    setSubmitting,
    redirect
  }
}

/**
 * 
 * @param {integer} id 
 * @param {string} success 
 * @returns 
 */
export function deleteRecordSuccess(id, success) {
  return {
    type: DELETE_RECORD_SUCCESS,
    id,
    success
  }
}

/**
 * @param {string} error 
 */
export function deleteRecordError(error) {
  return {
    type: DELETE_RECORD_ERROR,
    error
  }
}


export function loadRecordsMetaData() {
  return {
    type: LOAD_RECORDS_META_DATA
  }
}

/**
 * 
 * @param {object} recordsMetaData 
 * @returns 
 */
export function loadRecordsMetaDataSuccess(recordsMetaData) {
  return {
    type: LOAD_RECORDS_META_DATA_SUCCESS,
    recordsMetaData
  }
}

/**
 * 
 * @param {string} error 
 * @returns 
 */
export function loadRecordsMetaDataError(error) {
  return {
    type: LOAD_RECORDS_META_DATA_ERROR,
    error
  }
}


/**
 * 
 * @param {object} record 
 * @param {function} setSubmitting 
 * @param {function} redirect 
 * @returns 
 */
export function updateStatus(record, setSubmitting, redirect) {
  return {
    type: UPDATE_STATUS,
    record,
    setSubmitting,
    redirect
  }
}

/**
 * 
 * @param {object} record
 * @param {string} success 
 * @returns 
 */
 export function updateStatusSuccess(record, success) {
  return {
    type: UPDATE_STATUS_SUCCESS,
    record,
    success
  }
}

/**
 * 
 * @param {string} error 
 * @returns 
 */
export function updateStatusError(error) {
  return {
    type: UPDATE_STATUS_ERROR,
    error
  }
}



const actions = {
  loadRecord,
  loadRecordSuccess,
  loadRecordError,
  loadRecords,
  loadRecordsSuccess,
  loadRecordsError,
  createRecord,
  createRecordSuccess,
  createRecordError,
  updateRecord,
  updateRecordSuccess,
  updateRecordError,
  deleteRecord,
  deleteRecordSuccess,
  deleteRecordError,
  loadRecordsCacheHit,
  loadRecordsMetaData,
  loadRecordsMetaDataSuccess,
  loadRecordsMetaDataError,
  updateStatus,
  updateStatusSuccess,
  updateStatusError
}


export default actions

