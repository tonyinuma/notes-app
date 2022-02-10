import {Link} from "react-router-dom";
import {useForm} from "../../hooks/useForm";

export const RegisterScreen = () => {

    const [registerValues, inputChange] = useForm({
        name: "Rick Sanchez",
        email: "ricksanchez@gmail.com",
        password: "rick123",
        confirmPassword: "rick123"
    });

    const {name, email, password, confirmPassword} = registerValues

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(registerValues);
    }

    return (<>
        <h3 className="auth__title">Register</h3>
        <form onSubmit={handleRegister}>
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
