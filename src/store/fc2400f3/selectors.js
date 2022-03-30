/*
 *
 *  selectors
 *
 */

import { createSelector } from 'reselect'
import key from './key'
import mapRecords from './utils'

const name = atob(key)

export const selectDomain = () => (state) => state[name] || false

export const selectLoading = () => createSelector(
  selectDomain(),
  (domain) => domain && domain.loading || false,
)

export const selectRecordsMetaData = () => createSelector(
  selectDomain(),
  (domain) => domain && domain.recordsMetaData || {},
)

export const selectRecords = () => createSelector(
  selectDomain(),
  (domain) => domain && domain.records && mapRecords(domain.records, name) || []
)

export const selectRecord = () => createSelector(
  selectDomain(),
  (domain) => domain && domain.record && mapRecords([domain.record], name)[0] || {}
)

export const selectError = () => createSelector(
  selectDomain(),
  (domain) => domain && (domain.error || domain.pageError || false),
)

export const selectSuccess = () => createSelector(
  selectDomain(),
  (domain) => domain && domain.success || false,
)

export const selectUpdateTimestamp = () => createSelector(
  selectDomain(),
  (domain) => domain && domain.lastUpdate || false,
)

const selectors = {
  selectDomain,
  selectLoading,
  selectRecords,
  selectRecordsMetaData,
  selectRecord,
  selectError,
  selectSuccess,
  selectUpdateTimestamp
}

export default selectors

