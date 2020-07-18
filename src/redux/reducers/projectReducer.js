import { ADD_PROJECT } from '../actions/types';

const initialState = {
    projects: [
        { id: '1', title: 'webdev', content: 'content1' },
        { id: '2', title: 'mobile app', content: 'content 2' },
        { id: '3', title: 'Dg', content: 'content 3' }
    ]
};


export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROJECT:
            return {
                ...state,
                projects: [action.payload, ...state.projects]

            };
        default:
            return state;

    }
}
