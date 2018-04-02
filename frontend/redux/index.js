/**
 * ************************************
 *
 * @module  index.js
 * @author Pauline
 * @date 03/31/2018
 * @description lace to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import reducer from './reducer';


// combine reducers
// reducers is a FUNCTION
const reducers = combineReducers({
  // if we had other reducers, they would go here
  reducer: reducer
});

// make the combined reducers available for import
export default reducers;

