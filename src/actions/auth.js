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
import Swal from 'sweetalert2'

export const startLogin = (email, password) => {
    return async (dispatch) => {
        dispatch(startLoading())
        await signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(finishLoading())
                dispatch(login(user.uid, user.displayName));
            })
            .catch((e) => {
                console.log(e.message);
                dispatch(finishLoading())
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
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
                console.log(error.message);
                dispatch(finishLoading())
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
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

export const startLogout = () => {
    return async (dispatch) => {
        await auth.signOut();
        dispatch(logout());
    };
}

export const logout = () => ({
    type: types.logout,
})
