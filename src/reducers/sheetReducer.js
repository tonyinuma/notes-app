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
        case types.sheetLoad:
            return {
                ...state,
                sheets: [...action.payload]
            }
        case types.sheetUpdate:
            return {
                ...state,
                sheets: state.sheets.map(
                    sheet => sheet.id === action.payload.id
                        ? action.payload.sheet : sheet
                )
            }
        default:
            return state;
    }
};
