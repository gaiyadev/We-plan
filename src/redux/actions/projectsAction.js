import * as actionTypes from '../actions/types';

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make asyn call
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(project => {
            dispatch({
                type: actionTypes.ADD_PROJECT,
                project: project
            })
        }).catch(err => {
            dispatch({
                type: actionTypes.ADD_PROJECT_ERROR,
                err: err
            });
        });
    }
};



