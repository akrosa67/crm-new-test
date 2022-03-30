
/*
 *
 *  sagas
 *
 */

import { call, take, put, race, select, all, delay } from 'redux-saga/effects'

import {
    LOAD_RECORD,
    LOAD_RECORDS,
    CREATE_RECORD,
    UPDATE_RECORD,
    DELETE_RECORD,
    LOAD_RECORDS_META_DATA,
    UPDATE_STATUS
} from './constants'

import {
    loadRecords as loadRecordsAction,
    loadRecordsSuccess,
    loadRecordsError,
    loadRecordSuccess,
    loadRecordError,
    createRecordSuccess,
    createRecordError,
    updateRecordSuccess,
    updateRecordError,
    deleteRecordSuccess,
    deleteRecordError,
    loadRecordsCacheHit,
    loadRecordsMetaData as loadRecordsMetaDataAction,
    loadRecordsMetaDataSuccess,
    loadRecordsMetaDataError,
    updateStatusSuccess,
    updateStatusError
} from './actions'

import {
    loadRecords,
    loadRecord,
    createRecord,
    updateRecord,
    deleteRecord,
    updateStatus
} from './remotes'

import {
    selectRecords,
    selectUpdateTimestamp
} from './selectors'

function* loadRecordsSaga() {
    while (true) { // eslint-disable-line no-constant-condition
        const load = yield race({
            explicitLoad: take(LOAD_RECORDS),
        })

        const { explicitLoad } = load
        const { invalidateCache } = explicitLoad || {}
        const lastLoad = yield select(selectUpdateTimestamp())
        const currentTimestamp = Math.floor(Date.now() / 1000)
        const VALID_CACHE_DIFF = -30
        yield put(loadRecordsMetaDataAction())// Calling Dropdown API's

        if (explicitLoad) {
            if (!invalidateCache && (lastLoad && (lastLoad - currentTimestamp) > VALID_CACHE_DIFF)) {
                yield put(loadRecordsCacheHit())
            } else {
                try {
                    const result = yield call(loadRecords)

                    if (result) {
                        yield put(loadRecordsSuccess(result.data))
                    } else {
                        yield put(loadRecordsError("Fetch Records Failed"))
                    }
                } catch (error) {
                    yield put(loadRecordsError((error && error.response && error.response.message) || "Fetch Records Failed"))
                }
            }
        }
    }
}

function* loadRecordSaga() {
    while (true) { // eslint-disable-line no-constant-condition
        const loadRequest = yield race({
            request: take(LOAD_RECORD),
        })
        const { request } = loadRequest

        if (request) {
            const { id } = request
            try {
                const record = yield call(loadRecord, id)

                let recordsMetaData = {}
                if (record) {
                    // Delays the dispatch of loadRecordSuccess untill the store is populated with an initial list of records.
                    while (true) { // eslint-disable-line no-constant-condition
                        const recordsInStore = yield select(selectRecords())
                        if (recordsInStore && recordsInStore.length > 0) {
                            break
                        }
                        yield delay(500)
                    }
                    yield put(loadRecordSuccess(record, recordsMetaData))
                } else {
                    yield put(loadRecordError("Fetch Record Failed"))
                }


            } catch (error) {
                yield put(loadRecordError((error && error.response && error.response.message) || "Fetch Record Failed"))
            }
        }
    }
}

function* createRecordSaga() {
    while (true) { // eslint-disable-line no-constant-condition
        const { create } = yield race({
            create: take(CREATE_RECORD),
        })
        const { record, setSubmitting, redirect } = create || {}
        if (create) {
            yield call(setSubmitting, true)
            try {
                yield call(createRecord, record)

                yield delay(1000)
                yield put(createRecordSuccess(record, "Record Created Successfully"))
                yield put(loadRecordsAction(true))
                yield call(redirect)

            } catch (error) {
                yield put(createRecordError((error && error.response && error.response.message) || "Create Record Failed"))
            } finally {
                yield call(setSubmitting, false)
            }
        }
    }
}

function* editRecordSaga() {
    while (true) { // eslint-disable-line no-constant-condition
        
        const { edit } = yield race({
            edit: take(UPDATE_RECORD),
        })
        const { record, setSubmitting, redirect } = edit || {}
        if (edit) {
            yield call(setSubmitting, true)

            try {
                yield call(updateRecord, record)
                yield delay(1000)
                yield put(updateRecordSuccess(record, "Record Updated Successfully"))
                yield call(redirect)
            } catch (error) {
                yield put(updateRecordError((error && error.response && error.response.message) || "Update Record Failed"))
            } finally {
                yield call(setSubmitting, false)
            }
        }
    }
}


function* deleteRecordSaga() {
    while (true) { // eslint-disable-line no-constant-condition
        const { del } = yield race({
            del: take(DELETE_RECORD),
        })
        const { id, setSubmitting, redirect } = del || {}
        if (del) {
            yield call(setSubmitting, true)

            try {
                yield call(deleteRecord, id)
                yield delay(1000)
                yield put(deleteRecordSuccess(id, "Record Deleted Successfully"))
                yield call(redirect)
            } catch (error) {
                yield put(deleteRecordError((error && error.response && error.response.message) || "Delete Record Failed"))
            } finally {
                yield call(setSubmitting, false)
            }
        }
    }
}


function* loadRecordsMetaDataSaga() {
    while (true) { // eslint-disable-line no-constant-condition
        yield race({
            metaData: take(LOAD_RECORDS_META_DATA),
        })

        try {
            let recordsMetaData = {}
            yield put(loadRecordsMetaDataSuccess(recordsMetaData))
        } catch (error) {
            yield put(loadRecordsMetaDataError((error && error.response && error.response.message) || "Fetch Dropdown Records Failed"))
        }
    }
}

function* updateStatusSaga() {
    while (true) { // eslint-disable-line no-constant-condition
        const { update } = yield race({
            update: take(UPDATE_STATUS),
        })
        const { record = {}, setSubmitting, redirect } = update
        
        yield call(setSubmitting, true)

        try {
            const result = yield call(updateStatus, record)
            if (result) {
                yield put(updateStatusSuccess(record, "Status Updated Successfully"))
                yield call(redirect)
            } else {
                yield put(updateStatusError("Update Status Records Failed"))
            }
        } catch (error) {
            yield put(updateStatusError((error && error.response && error.response.message) || "Update Status Records Failed"))
        } finally {
            yield call(setSubmitting, false)
        }
    }
}

export default function* recordsSaga() {
    yield all([
        loadRecordSaga(),
        loadRecordsSaga(),
        createRecordSaga(),
        editRecordSaga(),
        deleteRecordSaga(),
        loadRecordsMetaDataSaga(),
        updateStatusSaga()
    ])
}



