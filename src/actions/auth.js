import {types} from "../types/types";

export const startLogin = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Tony Inuma'))
        }, 3500);
    };
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})
