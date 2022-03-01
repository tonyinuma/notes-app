import dayjs from "dayjs";
import {useDispatch} from "react-redux";
import {activeSheet} from "../../actions/sheet";

export const NoteEntry = (sheet) => {

    const {id, title, body, date, imageUrl} = sheet

    const dispatch = useDispatch();

    const handleEntryClick = () => {
        dispatch(activeSheet(id, sheet))
    }

    return (
        <div className="note__entry pointer" onClick={handleEntryClick}>
            {imageUrl &&
                <div className="note__entry-picture"
                     style={{
                         backgroundSize: 'cover',
                         backgroundImage: imageUrl
                     }}>
                </div>
            }
            <div className="note__entry-body">
                <p className="note__entry-title">
                    {title}
                </p>
                <p className="note__entry-content">
                    {body}
                </p>
            </div>
            <div className="note__entry-date-box">
                <span>{dayjs(date).format("dddd")}</span>
                <h4>{dayjs(date).date()}</h4>
            </div>
        </div>
    );
};
