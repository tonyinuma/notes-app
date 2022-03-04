import dayjs from "dayjs";
import {useDispatch, useSelector} from "react-redux";
import {startSaveSheet} from "../../actions/sheet";

export const SheetsAppBar = () => {

    const dispatch = useDispatch();
    const {active:sheet} = useSelector(state => state.sheet);

    const handleSaveSheet = () => {
        dispatch(startSaveSheet(sheet))
    };

    return (
        <div className="sheets__appbar">
            <span> {sheet ? dayjs(sheet.date).format("D MMMM YYYY") : dayjs().format("D MMMM YYYY")}</span>
            <div>
                <button className="btn">Picture</button>
                <button className="btn" onClick={handleSaveSheet}>Save</button>
            </div>
        </div>
    );
};
