export const Sidebar = () => {
    return (
        <aside className="note__sidebar">
            <div className="note_sidebar-navbar">
                <h3>
                    <i className="far fa-moon"/>
                    <span> Tony</span>
                </h3>

                <button className="btn">Logout</button>
            </div>
            <div className="note__new-entry">
                <i className="far fa-calendar-plus fa-5x"/>
                <p className="mt-5">New Entry</p>
            </div>

        </aside>
    );
};
