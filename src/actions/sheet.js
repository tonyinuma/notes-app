import {db} from "../firebase/firebaseConfig";
import {addDoc, collection} from "firebase/firestore";
import {types} from "../types/types";
import {loadSheets} from "../helpers/loadSheets";

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

export const activeSheet = (id, sheet) => ({
    type: types.sheetActive,
    payload: {
        id,
        ...sheet
    }
})

export const setSheets = (sheets) => ({
    type: types.sheetLoad,
    payload: sheets
})

export const startLoadingSheets = (uid) => {
    return async (dispatch) => {
        const sheets = await loadSheets(uid);
        dispatch(setSheets(sheets));
    }
}


