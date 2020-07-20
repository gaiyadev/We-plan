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
        default:
            return state;
    }
}
