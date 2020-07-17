import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import authReducer from './authReducer';


// To bring all app reducers together
export default combineReducers({
    project: projectReducer,
    auth: authReducer
});