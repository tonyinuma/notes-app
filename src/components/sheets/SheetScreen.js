import {SheetsAppBar} from "./SheetsAppBar";

export const SheetScreen = () => {
    return (
        <div className="sheets__main-content">
            <SheetsAppBar/>

            <div className="sheets__content">
                <input type="text"
                       className="sheets__title_input"
                       placeholder="Some Awesome Title"
                       autoComplete="off"/>
                <textarea className="sheets__textarea"
                          placeholder="What happened today?">
                </textarea>
                <div className="sheets__image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMeXZAympIZl23wKL9n7BfWfxbxtr7UnM8xw&usqp=CAU"
                         alt="imagen"/>
                </div>
            </div>
        </div>
    );
};
