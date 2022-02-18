import {types} from "../types/types";
import {
    auth,
    createUserWithEmailAndPassword,
    googleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile
} from "../firebase/firebaseConfig";
import {finishLoading, startLoading} from "./ui";

export const startLogin = (email, password) => {
    return async (dispatch) => {
        dispatch(startLoading())
        await signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(finishLoading())
                dispatch(login(user.uid, user.displayName));
            })
            .catch(e => {
                console.log(e);
                dispatch(finishLoading())
            });
    };
}

export const startRegister = (email, password, name) => {
    return (dispatch) => {
        dispatch(startLoading())
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({user}) => {

                await updateProfile(auth.currentUser, {
                    displayName: name
                });

                dispatch(finishLoading())
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
