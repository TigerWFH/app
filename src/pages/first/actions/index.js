export const FIRST_1 = Symbol('FIRST_1');
export const FIRST_2 = Symbol('FIRST_2');

export const getFirstData = (data) => {
    return {
        type: FIRST_1,
        payload: data || { data: "firstData" }
    }
}