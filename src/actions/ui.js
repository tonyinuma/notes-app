import {types} from "../types/types";

export const setErrorAction = (message) => ({
    type: types.uiSetError,
    payload: message
})

export const removeErrorAction = () => ({
    type: types.uiRemoveError
})

export const startLoading = () => ({
    type: types.uiStartLoading,
    payload: true
})

export const finishLoading = () => ({
    type: types.uiFinishLoading,
    payload: false
})
