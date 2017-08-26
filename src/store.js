// libs
import { createStore, applyMiddleware } from 'redux';
// plugins
import thunkMiddleWare from 'redux-thunk';
import { createLogger } from 'redux-logger';

import createReducers from './reducer';

const logger = createLogger({
    duration: true,
    logErrors: true,
    collapsed: true,
    actionTransformer: (action) => ({ ...action, type: action.type && action.type.toString() })
});

let middleWares = [thunkMiddleWare, logger];
let initialState = {};
let store = createStore(createReducers(), initialState, applyMiddleware(...middleWares));
store.asyncReducers = {};
export default store;

/**
 * @desc 为延迟加载的module注入reducer
 * @param {*} store 全局store
 * @param {*} name reducer名或reducer map
 * @param {*} asyncReducer reducer
 */
export function injectAsyncReducer(store, name, asyncReducer) {
    if (typeof name === 'string' && typeof asyncReducer === 'function') {
        store.asyncReducers[name] = asyncReducer;
    }
    if (Object.prototype.toString.call(name) === '[object Object]') {
        store.asyncReducers = name;
    }
    store.replaceReducer(createReducers(store.asyncReducers));
}