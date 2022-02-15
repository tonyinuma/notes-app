import {types} from "../types/types";
import {getAuth, googleAuthProvider, signInWithPopup} from "../firebase/firebaseConfig";

export const startLogin = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Tony Inuma'))
        }, 3500);
    };
}

export const startLoginGoogle = () => {
    return (dispatch) => {
        signInWithPopup(getAuth(), googleAuthProvider)
            .then(({user}) => {
                const {displayName, uid} = user;
                dispatch(login(uid, displayName))
            })
            .catch(err => {
                console.log(err);
            });
    };
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})
