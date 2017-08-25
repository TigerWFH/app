import { combineReducers } from 'redux';

import demoReducers from './pages/demo/reducers';
import firstReducers from './pages/first/reducers';

// export default (state = {}, action) => {
//     switch (action.type) {
//         case "TEST":
//         default:
//             return state;
//     }
// }

export default combineReducers({
    demo: demoReducers,
    first: firstReducers
});