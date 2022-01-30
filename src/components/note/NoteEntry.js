export const NoteEntry = () => {
    return (
        <div className="note__entry pointer">
            <div className="note__entry-picture"
                 style={{
                     backgroundSize: 'cover',
                     backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSROH-fnfKJxUM923huTUUaOrMcwDY0VFtvpOiAiVXI56VxNuHoJepaPkazO96K4uZOWdI&usqp=CAU)'
                 }}>

            </div>
            <div className="note__entry-body">
                <p className="note__entry-title">
                    a new day
                </p>
                <p className="note__entry-content">
                    descriptiondawd wdadawdawdawdawdawd
                </p>
            </div>
            <div className="note__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    );
};
