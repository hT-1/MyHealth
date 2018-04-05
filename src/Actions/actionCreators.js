import * as types from '../Constants/actionTypes'

// add more action creators
export const syncDB = (data) => ({
    type: types.SYNC_DB,
    data: data
});

export const addPeriod = (dbState) => ({
    type: types.ADD_PERIOD,
    
});

export const selectEntries = (date) => ({
    type: types.SELECT_ENTRIES,
    date
})

export const addEntries = (entry) => ({
    type: types.ADD_ENTRY,
    entry
})

export const deleteEntry = (data) => ({
    type: types.DELETE_ENTRY,
    data
})
