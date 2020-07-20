import * as actionTypes from '../actions/types';

const initialState = {
    authError: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_ERROR:
            return {
                ...state,
                authError: 'Login fail'
            };
        case actionTypes.LOGIN_SUCCESS:
            console.log('login success');
            return {
                ...state,
                authError: null
            };
        case actionTypes.SIGN_OUT_SUCCESS:
            console.log('signOut success');
            return state;
        case actionTypes.SIGN_UP_SUCCESS:
            console.log('signup sucess');
            return {
                ...state,
                authError: null
            };
        case actionTypes.SIGN_UP_ERROR:
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}
