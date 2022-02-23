import {Sidebar} from "./Sidebar";
import {SheetScreen} from "../sheets/SheetScreen";
import {useSelector} from "react-redux";
import {NothingSelected} from "./NothingSelected";

export const NoteScreen = () => {

    const {active} = useSelector(state => state.sheet);

    return (
        <div className="note__main-content">
            <Sidebar/>
            <main>
                {active ? <SheetScreen/> : <NothingSelected/>}
            </main>
        </div>
    );
};
