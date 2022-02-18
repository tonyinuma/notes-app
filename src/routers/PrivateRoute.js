import {Redirect, Route} from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRoute = ({authenticated, component: Component, ...rest}) => {

    return (
        <Route {...rest}
               component={(props) => (
                   (authenticated) ?
                       <Component {...props}/> :
                       <Redirect to="/auth/login"/>
               )}>
        </Route>
    )
};

PrivateRoute.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};
