import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { reduxPromise } from '../applyMiddleware';
import calCultorReducer from './reducer';
// console.log('thunk: =>', thunk);


const store = createStore(calCultorReducer, applyMiddleware(thunk, reduxPromise));

export default store;