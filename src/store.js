import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducers from './reducer';

const logger = createLogger({
    duration: true,
    logErrors: true,
    collapsed: true,
    actionTransformer: (action) => ({ ...action, type: action.type && action.type.toString() })
});
let middleWares = [thunkMiddleWare, logger];
let initialState = {};

let store = createStore(rootReducers, initialState, applyMiddleware(...middleWares));

export default store;