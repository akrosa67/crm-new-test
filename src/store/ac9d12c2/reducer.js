/*
 *
 *   reducer
 *
 */
import produce from 'immer'
import key from './key'

import {
    LOAD_RECORD,
    LOAD_RECORD_SUCCESS,
    LOAD_RECORD_ERROR,
    LOAD_RECORDS,
    LOAD_RECORDS_SUCCESS,
    LOAD_RECORDS_ERROR,
    CREATE_RECORD_SUCCESS,
    CREATE_RECORD_ERROR,
    UPDATE_RECORD_SUCCESS,
    UPDATE_RECORD_ERROR,
    DELETE_RECORD_SUCCESS,
    DELETE_RECORD_ERROR,
    LOAD_RECORDS_VALID_CACHE,
    LOAD_RECORDS_META_DATA_SUCCESS,
    LOAD_RECORDS_META_DATA_ERROR,
    UPDATE_STATUS_SUCCESS,
    UPDATE_STATUS_ERROR
} from './constants'

const initialState = {
    records: [],
    record: {},
    recordsMetaData: {},
    loading: false,
    error: false,
    success: false,
    lastUpdate: null
}

export default function Reducer(state = initialState, { type, id, record, records, recordsMetaData = {}, error, success }) {

    return produce(state, draft => {
        switch (type) {
            case LOAD_RECORDS_VALID_CACHE:
                draft.loading = false
                draft.error = false
                draft.success = false
                break
            case LOAD_RECORDS:
            case LOAD_RECORD:
                draft.loading = true
                draft.error = false
                draft.success = false
                break
            case LOAD_RECORDS_SUCCESS:
                draft.records = records
                draft.lastUpdate = Math.floor(Date.now() / 1000)
                draft.loading = false
                draft.error = false
                draft.success = false
                break
            case LOAD_RECORD_SUCCESS:
                draft.record = record
                draft.lastUpdate = Math.floor(Date.now() / 1000)
                draft.loading = false
                draft.error = false
                draft.success = false
                break
            case LOAD_RECORDS_META_DATA_SUCCESS:
                draft.recordsMetaData = Object.assign({}, state.recordsMetaData, recordsMetaData)
                draft.error = false
                draft.success = false
                break
            case CREATE_RECORD_SUCCESS:
                draft.records = [record].concat(state.records)
                draft.loading = false
                draft.error = false
                draft.success = success
                break
            case UPDATE_RECORD_SUCCESS:
                draft.records = state.records.find(r => record._id === r._id) ? state.records.map((r) => record._id === r._id ? Object.assign({}, r, record) : r) : state.records.concat([{ ...record }])
                draft.loading = false
                draft.error = false
                draft.success = success
                break
            case DELETE_RECORD_SUCCESS:
                draft.records = state.records.filter((r) => r._id.toString() !== id.toString())
                draft.loading = false
                draft.error = false
                draft.success = success
                break
            case UPDATE_STATUS_SUCCESS:
                draft.records = record.status === 3 && record[`${atob(key)}Id`] ? draft.records.filter(r => !record[`${atob(key)}Id`].includes(r._id)) : record.status === 2 && record[`${atob(key)}Id`] ? draft.records.map(r => record[`${atob(key)}Id`].includes(r._id) ? Object.assign({}, r, { status: false }) : r) : record.status === 1 && record[`${atob(key)}Id`] ? draft.records.map(r => Object.assign({}, r, { status: 1 })) : draft.records || []
                draft.loading = false
                draft.error = false
                draft.success = success
                break
            case LOAD_RECORDS_ERROR:
            case LOAD_RECORD_ERROR:
            case CREATE_RECORD_ERROR:
            case UPDATE_RECORD_ERROR:
            case DELETE_RECORD_ERROR:
            case UPDATE_STATUS_ERROR:
                draft.loading = false
                draft.error = error
                draft.success = false
                break
            case LOAD_RECORDS_META_DATA_ERROR:
                draft.error = error
                draft.success = false
                break
        }
    })
}

