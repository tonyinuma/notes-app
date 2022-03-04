import {SheetsAppBar} from "./SheetsAppBar";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "../../hooks/useForm";
import {useEffect, useRef} from "react";
import {activeSheet} from "../../actions/sheet";

export const SheetScreen = () => {

    const dispatch = useDispatch();
    const {active: sheet} = useSelector(state => state.sheet);
    const [formValues, handleInputChange, reset] = useForm(sheet);
    const activeId = useRef(sheet.id)

    useEffect(() => {
        if (sheet.id !== activeId.current) {
            reset(sheet);
            activeId.current = sheet.id;
        }
    }, [sheet, reset]);

    useEffect(() => {
        dispatch(activeSheet(formValues.id, {...formValues}));
    }, [formValues]);

    return (
        <div className="sheets__main-content">
            <SheetsAppBar sheet={sheet}/>

            <div className="sheets__content">
                <input type="text" value={formValues.title}
                       onChange={handleInputChange} name="title"
                       className="sheets__title_input"
                       placeholder="Some Awesome Title"
                       autoComplete="off"/>
                <textarea className="sheets__textarea"
                          placeholder="What happened today?"
                          onChange={handleInputChange} value={formValues.body}
                          name="body">
                </textarea>
                <div className="sheets__image">
                    {
                        sheet.imageUrl &&
                        <img src={sheet.imageUrl} alt="image_sheet"/>
                    }
                </div>
            </div>
        </div>
    );
};
