import * as actionTypes from '../actions/types';


export const signUp = newUser => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(res => {
            firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({
                type: actionTypes.SIGN_UP_SUCCESS,
            })
        })
            .catch(err => {
                dispatch({
                    type: actionTypes.SIGN_UP_ERROR,
                    err: err
                })
            });
    }
}



export const signIn = credentials => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS
            })
        }).catch(err => {
            dispatch({
                type: actionTypes.LOGIN_ERROR,
                err: err
            })
        });
    };
}


export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({
                type: actionTypes.SIGN_OUT_SUCCESS
            })
        }).catch(err => {
            dispatch({
                type: actionTypes.SIGN_OUT_ERROR,
                err: err
            })
        })
    }
}