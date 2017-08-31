// constants
export const ALGORITHM_FIRST = Symbol('ALGORITHM_FIRST');


// actions
export const getAlgorithm = (data) => {
    return {
        type: ALGORITHM_FIRST,
        payload: data || {}
    }
};