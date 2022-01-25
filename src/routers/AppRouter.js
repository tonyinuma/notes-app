import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {NoteScreen} from "../components/note/NoteScreen";
import {AuthRouter} from "./AuthRouter";

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/auth" component={AuthRouter}/>
                <Route exact path="/" component={NoteScreen}/>
                <Redirect to="/auth/login"/>
            </Switch>
        </Router>
    );
};
