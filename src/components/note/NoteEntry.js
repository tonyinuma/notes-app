import dayjs from "dayjs";

export const NoteEntry = ({title, body, date, imageUrl}) => {
    return (
        <div className="note__entry pointer">
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
