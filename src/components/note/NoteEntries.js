import {NoteEntry} from "./NoteEntry";

export const NoteEntries = () => {

    const entries = [1, 2, 4, 5, 6, 7, 8, 9];

    return (
        <div className="note__entries">
            {entries.map(entry => (
                <NoteEntry key={entry}/>
            ))}
        </div>
    );
};
