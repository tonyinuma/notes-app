import {db} from "../firebase/firebaseConfig";
import {addDoc, collection} from "firebase/firestore";
import {types} from "../types/types";

export const startNewSheet = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        const sheet = {
            title: '',
            body: '',
            date: new Date().toISOString()
        }

        try {
            const docRef = await addDoc(collection(db, `${uid}/notes/sheets`), sheet);

            dispatch(activeSheet(docRef.id, sheet));

        } catch (e) {
            console.log(e);
        }
    }
}

export const activeSheet = (id, note) => ({
    type: types.sheetActive,
    payload: {
        id,
        ...note
    }
})


