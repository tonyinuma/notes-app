import {NoteEntry} from "./NoteEntry";
import {useSelector} from "react-redux";

export const NoteEntries = () => {

    const {sheets} = useSelector(state => state.sheet);

    return (
        <div className="note__entries">
            {sheets.map(sheet => (
                <NoteEntry key={sheet.id} {...sheet}/>
            ))}
        </div>
    );
};
