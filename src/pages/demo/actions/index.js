export const DEMO_1 = Symbol('DEMO_1');
export const DEMO_2 = Symbol('DEMO_2');
export const DEMO_3 = Symbol('DEMO_3');

export const sendTest = (data) => {
    return {
        type: DEMO_1,
        payload: {
            data: data || { data: "test1" }
        }
    };
}