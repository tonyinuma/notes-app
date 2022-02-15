import {types} from "../types/types";
import {
    auth,
    createUserWithEmailAndPassword,
    googleAuthProvider,
    signInWithPopup,
    updateProfile
} from "../firebase/firebaseConfig";

export const startLogin = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Tony Inuma'))
        }, 3500);
    };
}

export const startRegister = (email, password, name) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({user}) => {

                await updateProfile(auth.currentUser, {
                    displayName: name
                });

                dispatch(login(user.uid, name));

            })
            .catch(error => {
                console.log(error);
            });
    };
}

export const startLoginGoogle = () => {
    return (dispatch) => {
        signInWithPopup(auth, googleAuthProvider)
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
