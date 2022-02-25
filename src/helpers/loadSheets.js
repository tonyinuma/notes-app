import {db} from "../firebase/firebaseConfig";
import {collection, getDocs} from "firebase/firestore";

export const loadSheets = async (uid) => {
    const sheetsResponse = await getDocs(collection(db, `${uid}/notes/sheets`));
    const sheets = []

    sheetsResponse.forEach(sheet => {
        sheets.push({
            id: sheet.id,
            ...sheet.data()
        });
    });

    return sheets;
}
