import {NoteEntries} from "./NoteEntries";
import {useDispatch, useSelector} from "react-redux";
import {startLogout} from "../../actions/auth";

export const Sidebar = () => {

    const {name} = useSelector(state => state.auth);
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <aside className="note__sidebar">
            <div className="note_sidebar-navbar">
                <h3>
                    <i className="far fa-moon"/>
                    <span> {name}</span>
                </h3>

                <button className="btn" onClick={handleLogout}>Logout</button>
            </div>
            <div className="note__new-entry">
                <i className="far fa-calendar-plus fa-5x"/>
                <p className="mt-5">New Entry</p>
            </div>

            <NoteEntries/>

        </aside>
    );
};
