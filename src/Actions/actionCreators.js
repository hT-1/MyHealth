import * as types from '../Constants/actionTypes';
// Grabs the initial data flow for that month for that user
export const syncDB = data => ({
  type: types.SYNC_DB,
  data
});
// TODO: Need to add Period Functionality for tracking
export const addPeriod = dbState => ({
  type: types.ADD_PERIOD,
  dbState
});
// Grabs entries for the given day from the state
export const selectEntries = date => ({
  type: types.SELECT_ENTRIES,
  date
});
// Adds new entries for a given day
export const addEntries = entry => ({
  type: types.ADD_ENTRY,
  entry
});
// Deletes the entries from the Database/UI
export const deleteEntry = data => ({
  type: types.DELETE_ENTRY,
  data
});
