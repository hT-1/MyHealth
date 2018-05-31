import { combineReducers } from 'redux';

// import all reducers here
import symptomReducer from './symptomReducer';

// combine reducers
// reducers is a FUNCTION
const reducers = combineReducers({
  // if we had other reducers, they would go here
  data: symptomReducer
});

// make the combined reducers available for import
export default reducers;

