import {types} from "../types/types";

const initialState = {
    sheets: [],
    active: null
}

export const sheetReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.sheetActive:
            return {
                ...state,
                active: {...action.payload}
            }
        default:
            return state;
    }
};
