import * as actionTypes from '../actions/types';

const initialState = {
    projects: [
        { id: 1, title: 'web dev', content: 'this is wash' },
        { id: 2, title: ' dev', content: 'this is wash' },
        { id: 3, title: 'mobile', content: 'this is wash' },
        { id: 4, title: 'web dev', content: 'this is wash' }
    ]
};


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PROJECT:
            console.log('created project', action.project)
            return {
                ...state
            };
        case actionTypes.ADD_PROJECT_ERROR:
            console.log('Create project error', action.err);
            return state;
        default:
            return state;
    }

}



