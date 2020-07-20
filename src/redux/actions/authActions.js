import * as actionTypes from '../actions/types';


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