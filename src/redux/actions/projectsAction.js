import * as actionTypes from '../actions/types';

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make asyn call
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: "obed",
            authorLastName: 'jude',
            authorID: 123456,
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



