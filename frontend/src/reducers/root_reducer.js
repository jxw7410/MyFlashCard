import { combineReducers } from 'redux';
import sessionReducer from './session_reducer'; 

export default combineReducers({
  // Remove this later, because 
  session: sessionReducer,
  
});

