import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import authReducer from './authReducer';
import { firestoreReducer } from 'redux-firestore';


// To bring all app reducers together
export default combineReducers({
    project: projectReducer,
    auth: authReducer,
    firestore: firestoreReducer
});