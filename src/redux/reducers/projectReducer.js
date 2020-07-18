import { ADD_PROJECT, ADD_PROJECT_ERROR, GET_PROJECT, GET_PROJECT_ERROR } from '../actions/types';

const initialState = {
    projects: [   ]
};


export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROJECT:
            return {
                ...state,
                projects: [action.payload, ...state.projects]

            };
        case GET_PROJECT:
            console.log(action.payload)
            return {
                ...state,
                projects: [action.payload, ...state.projects]
            };
        case ADD_PROJECT_ERROR:
            return console.log(action.err);
        // case GET_PROJECT_ERROR:
        //    return console.log(action.err);
        default:
            return state;

    }
}


