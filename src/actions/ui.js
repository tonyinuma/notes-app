import {types} from "../types/types";

export const setErrorAction = (message) => ({
    type: types.uiSetError,
    payload: {
        message
    }
})

export const removeErrorAction = () => ({
    type: types.uiRemoveError
})
