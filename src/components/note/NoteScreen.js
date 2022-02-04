import {Sidebar} from "./Sidebar";
import {SheetScreen} from "../sheets/SheetScreen";
// import {NothingSelected} from "./NothingSelected";

export const NoteScreen = () => {
    return (
        <div className="note__main-content">
            <Sidebar/>
            <main>
                {/*<NothingSelected/>*/}
                <SheetScreen/>
            </main>
        </div>
    );
};
