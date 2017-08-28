/**
 * @title:      app reducers
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:       2017-8-23
 * @modify Date: 
 */

// libs
import { combineReducers } from 'redux';
// reducers
import demo from './pages/demo/reducers';

export default (asyncReducers) => {
    return combineReducers({
        ...asyncReducers,//异步载入的
        demo
    });
};