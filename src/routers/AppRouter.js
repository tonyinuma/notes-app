import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import {NoteScreen} from "../components/note/NoteScreen";
import {AuthRouter} from "./AuthRouter";
import {useEffect, useState} from "react";
import {auth, onAuthStateChanged} from "../firebase/firebaseConfig";
import {useDispatch} from "react-redux";
import {login} from "../actions/auth";
import {PublicRoute} from "./PublicRoute";
import {PrivateRoute} from "./PrivateRoute";

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
            }
            setChecking(false);
        });
    }, [dispatch]);

    if (checking) {
        return <h1>Wait a moment...</h1>;
    }

    return (
        <Router>
            <Switch>
                <PublicRoute
                    path="/auth"
                    authenticated={authenticated}
                    component={AuthRouter}/>
                <PrivateRoute
                    exact
                    authenticated={authenticated}
                    path="/"
                    component={NoteScreen}>
                </PrivateRoute>
                <Redirect to="/auth/login"/>
            </Switch>
        </Router>
    );
};
