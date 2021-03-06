
import * as Actions from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case Actions.DEMO_1:
            // business logic
            state = { ...state, ...action.payload }
            break;
        case Actions.DEMO_2:
            // business logic
            state = { ...state, ...action.payload }
            break;
        case Actions.DEMO_3:
            state = { ...state, ...action.payload }
            // business
            break;
        default:
            state = { ...state };
    }

    return state;
};