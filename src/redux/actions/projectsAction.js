import { ADD_PROJECT } from '../actions/types';


export const createProject = project => (dispatch, getState, { getFirebase, getFirestore }) => {
    // call to db
    
    dispatch({
        type: ADD_PROJECT,
        payload: project
    })
};
