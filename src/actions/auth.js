import {types} from "../types/types";
import {firebase, googleAuthProvider} from "../firebase/firebaseConfig";

export const startLogin = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Tony Inuma'))
        }, 3500);
    };
}

export const startLoginGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(userCred => {
                const {_delegate : user} = userCred.user;
                dispatch(login(user.uid, user.displayName))
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
