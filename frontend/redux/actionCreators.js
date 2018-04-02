/**
 *
 * @module actionCreators.js
 * @author Pauline
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from './actionTypes'

// add more action creators
export const syncDB = (dbState) => ({
    type: actionType.SYNC_DB,
    payload: dbState
})

export const addPeriod = (dbState) => ({
    type: actionType.ADD_PERIOD,
    
});
