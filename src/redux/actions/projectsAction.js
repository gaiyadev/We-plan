import { ADD_PROJECT, ADD_PROJECT_ERROR } from '../actions/types';
import firebase from '../../config/fb';


export const createProject = createProject => (dispatch, getState) => {
    // call to firestore
    firebase.firestore().collection('projects').add({
        ...createProject,
        authorFirstName: "obededom",
        authorLastName: "gaiya",
        authorID: 1234,
        createdAt: new Date()
    }).then(project => {
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    })
        .catch(err => {
            dispatch({
                type: ADD_PROJECT_ERROR,
                err
            })
        });

};
