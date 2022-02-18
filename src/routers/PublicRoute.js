import {Redirect, Route} from "react-router-dom";
import {PrivateRoute} from "./PrivateRoute";
import PropTypes from 'prop-types';

export const PublicRoute = ({authenticated, component: Component, ...rest}) => {

    return (
        <Route {...rest}
               component={(props) => (
                   (authenticated) ?
                       <Redirect to="/"/> :
                       <Component {...props}/>
               )}>
        </Route>
    )
};

PrivateRoute.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};
