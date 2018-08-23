import {handleActions} from 'redux-actions';
export const goods = handleActions(
    {
        GET_GOODS: (state, action) => ({
            ...state,
            data: action.payload
        }),
        IS_TEST: (state, action) => ({
            ...state,
            test: action.payload
        }),
    }, 
    {
        data: [],
        test: false
    }
);