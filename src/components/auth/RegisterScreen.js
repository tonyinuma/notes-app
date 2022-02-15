import {Link} from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import {removeErrorAction, setErrorAction} from "../../actions/ui";
import validator from "validator/es";
import {startRegister} from "../../actions/auth";

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {errorMessage} = useSelector(state => state.ui);

    const [registerValues, inputChange] = useForm({
        name: "Rick Sanchez",
        email: "ricksanchez@gmail.com",
        password: "rick123",
        confirmPassword: "rick123"
    });

    const {name, email, password, confirmPassword} = registerValues

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegister(email, password, name));
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setErrorAction("Name is required"));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setErrorAction("Email is invalid"));
            return false;
        } else if (password !== confirmPassword || password.trim().length < 5) {
            dispatch(setErrorAction('Password should be at least 6 characters and match'));
            return false;
        }

        dispatch(removeErrorAction());
        return true;
    }

    return (<>
        <h3 className="auth__title">Register</h3>
        <form onSubmit={handleRegister}>

            {errorMessage && <div className="auth__alert-error">{errorMessage}</div>}

            <input type="text" placeholder="Name" name="name" value={name}
                   onChange={inputChange} className="auth__input" autoComplete="off"/>
            <input type="text" placeholder="Email" name="email" value={email}
                   onChange={inputChange} className="auth__input" autoComplete="off"/>
            <input type="password" placeholder="Password" name="password" value={password}
                   onChange={inputChange} className="auth__input"/>
            <input type="password" placeholder="Confirm password" name="confirmPassword" value={confirmPassword}
                   onChange={inputChange} className="auth__input"/>
            <button type="submit" className="btn btn-primary btn-block mb-5">Register</button>

            <Link to="/auth/login" className="link">
                ¿Already registered?
            </Link>
        </form>
    </>);
};
