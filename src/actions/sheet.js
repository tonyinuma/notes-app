import {db} from "../firebase/firebaseConfig";
import {addDoc, collection, doc, updateDoc} from "firebase/firestore";
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

export const startSaveSheet = (sheet) => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;

        const sheetUpdate = {...sheet};
        delete sheetUpdate.id;

        const sheetRef = doc(db, `${uid}/notes/sheets/${sheet.id}`);
        await updateDoc(sheetRef, sheetUpdate);

        dispatch(refreshSheet(sheet.id, sheetUpdate));
    }
}

export const refreshSheet = (id, sheet) => ({
    type: types.sheetUpdate,
    payload: {
        id,
        sheet: {
            id,
            ...sheet
        }
    }
});
