import { GET_PROJECT, ADD_PROJECT } from '../actions/types';

const initialState = {
    project: [
        { id: '1', title: 'webdev', content: 'content1' },
        { id: '2', title: 'webdev', content: 'content1' },
        { id: '3', title: 'webdev', content: 'content1' }
    ],
};


export default (state = initialState, action) => {
    return {
        ...state
    };
}
