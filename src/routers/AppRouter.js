import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {NoteScreen} from "../components/note/NoteScreen";
import {AuthRouter} from "./AuthRouter";
import {useEffect} from "react";
import {auth, onAuthStateChanged} from "../firebase/firebaseConfig";
import {useDispatch} from "react-redux";
import {login} from "../actions/auth";

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
            }
        });
    }, [dispatch]);

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
