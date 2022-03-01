import dayjs from "dayjs";

export const SheetsAppBar = (sheet) => {
    return (
        <div className="sheets__appbar">
            <span> {sheet ? dayjs(sheet.date).format("D MMMM YYYY") : dayjs().format("D MMMM YYYY")}</span>
            <div>
                <button className="btn">Picture</button>
                <button className="btn">Save</button>
            </div>
        </div>
    );
};
