import { combineReducers } from 'redux';

import demo from './pages/demo/reducers';
import first from './pages/first/reducers';

export default combineReducers({
    demo,
    first
});

// export default createReducers = (asyncReducers) => {
//     return combineReducers({
//         ...asyncReducers,//异步载入的
//         demo,
//         first
//     });
// };