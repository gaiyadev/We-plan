import { ADD_PROJECT, ADD_PROJECT_ERROR, GET_PROJECT_ERROR, GET_PROJECT } from '../actions/types';
import firebase from '../../config/fb';
import axios from 'axios';

const URL = 'https://we-plan-1ad08.firebaseio.com';

export const createProject = createProject => (dispatch, getState) => {
    // call to firestore
    fetch(URL + '/projects.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(createProject)
    })
        .then(response => response.json())
        .then(project => dispatch({
            type: ADD_PROJECT,
            payload: project
        }))
        .catch(err => console.log(err));
    // axios.post('https://we-plan-1ad08.firebaseio.com/projects.json', createProject).then(res => {
    //     dispatch({
    //         type: ADD_PROJECT,
    //         payload: res.data
    //     })
    // })
};




export const getProjects = () => (dispatch, getState) => {
    // call to firestore
    fetch(URL + '/projects.json')
        .then(reponse => reponse.json())
        .then(projects => dispatch({
            type: GET_PROJECT,
            payload: projects
        }));
}