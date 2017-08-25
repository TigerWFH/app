import * as Actions from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case Actions.FIRST_1:
            // business logic
            state = { ...state, ...action.payload }
            break;
        case Actions.FIRST_2:
            // business login
            state = { ...state, ...action.payload }
            break;
        default:
            state = { ...state };
    }
    return state;
}