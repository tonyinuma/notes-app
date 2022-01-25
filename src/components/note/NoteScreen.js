import {Sidebar} from "./Sidebar";

export const NoteScreen = () => {
    return (
        <div className="note__main-content">
            <Sidebar/>
            <main>
                <h1>Content</h1>
            </main>
        </div>
    );
};
