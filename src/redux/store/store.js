import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import fb from '../../config/fb';



const initialState = {};

const middleware = [reduxThunk.withExtraArgument({ getFirebase, getFirestore })];

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    reduxFirestore(fb),
    reactReduxFirebase(fb),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;