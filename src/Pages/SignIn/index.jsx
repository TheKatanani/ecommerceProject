import React, { useContext, useReducer } from 'react';
import { validationSchemaSignIn } from '../../validationSchema';
import { LoginStyle } from './styled';
import Input from '../../Components/Input';
import Checkbox from '../../Components/Checkbox';
import logInPassword from '../../Images/VectorpasswordIcon.png'
import { Link } from 'react-router-dom';
import Facebook from '../../Images/facebook.png'
import Google from '../../Images/google.png'
import Or from '../../Components/Or';
import SignInFooter from '../../Components/SignFooter';

import { Container, FaceButton, GoogleButton, IconButton, LogInButton } from '../../Global/components';
import axios from 'axios';
import { API } from '../../API';
import { AuthContext } from '../../Context';
import { ACTIONS } from '../../Actions';
import ErrorForm from '../../Components/ErrorForm';
// import Loading from '../../Components/Loading';
const initialState = {
    email: "",
    password: "",
    error: {},
    passwordStrength: "",
    selectPhone: "",
    isChecked: false,
    isLoading: false,
    passwordType: "password",
};
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.HANDLE_INPUT_CHANGE:
            return {
                ...state,
                [action.id]: action.value,
            };
        case ACTIONS.HANDLE_CHECKBOX_CHANGE:
            return {
                ...state,
                isChecked: action.checked,
            };
        case ACTIONS.LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case ACTIONS.ERROR:
            return {
                ...state,
                error: action.errors,
            };
        case ACTIONS.PASSWORD_TYPE:
            return {
                ...state,
                passwordType: action.passwordType,
            };
        default:
            return state;
    }
};
function SignIn() {
    const [formState, dispatch] = useReducer(reducer, initialState);
    const [, setIsAuthenticated] = useContext(AuthContext);
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        dispatch({ type: ACTIONS.HANDLE_INPUT_CHANGE, id, value });
    };
    const handleCheckboxChange = (event) => {
        dispatch({ type: ACTIONS.HANDLE_CHECKBOX_CHANGE, checked: event.target.checked });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.LOADING, isLoading: true });
        try {
            await validationSchemaSignIn.validate({
                email: formState.email,
                password: formState.password,
                isChecked: formState.isChecked
            }, { abortEarly: false });
            const res = await axios.post(`${API}/users/login`, {
                email: formState.email,
                password: formState.password
            });
            if (res.data) {
                localStorage.setItem('token', res.data.token);
                setIsAuthenticated(true)
            }
        } catch (error) {
            if (error.isAxiosError) {
                dispatch({ type: ACTIONS.ERROR, errors: { isAxiosError: error.message } });
            } else {
                const errors = error.inner
                    ? error.inner.reduce((acc, { path, message }) => {
                        acc[path] = message;
                        return acc;
                    }, {})
                    : {};
                dispatch({ type: ACTIONS.ERROR, errors });
            }
        } finally {
            dispatch({ type: ACTIONS.LOADING, isLoading: false });
        }
    }
    return (
        <>
            <LoginStyle>
                <Container>
                    <main>
                        <h1>Sign in</h1>
                        <form onSubmit={handleSubmit}>
                            {formState.error?.email && <ErrorForm>{formState.error?.email}</ErrorForm>}
                            <Input
                                onChange={handleInputChange}
                                id="email"
                                type="text"
                                placeholder="Email or phone"
                                label="Username"
                                value={formState.email}
                            />
                            {/* *************************** */}
                            {formState.error?.password && <ErrorForm>{formState.error?.password}</ErrorForm>}
                            <div className={`logInPassword ${formState.passwordType}`}>
                                <span>
                                    <img src={logInPassword} alt="" onClick={() => {
                                        dispatch({ type: ACTIONS.PASSWORD_TYPE, passwordType: formState.passwordType === "password" ? "text" : "password" })
                                    }} />
                                </span>
                                <Link to="/#" className='forgotPassword'>Forgot Password</Link>
                                <Input
                                    onChange={handleInputChange}
                                    id="password"
                                    type={formState.passwordType}
                                    placeholder="Type here"
                                    label="Password"
                                    value={formState.password}
                                />
                            </div>
                            {/* *********************** */}
                            {formState.error?.isChecked && <ErrorForm>{formState.error?.isChecked}</ErrorForm>}
                            <Checkbox id="Remember" label="Remember me" onChange={handleCheckboxChange} />
                            {formState.error?.isAxiosError && <ErrorForm>{formState.error?.isAxiosError}</ErrorForm>}
                            <LogInButton type="submit">{formState.isLoading ? "...loading" : "Login"}</LogInButton>
                        </form>
                        <Or />
                        <IconButton className="buttonIcon">
                            <img src={Google} alt="Google" />
                            <GoogleButton>Login with Google</GoogleButton>
                        </IconButton>
                        <IconButton className="buttonIcon">
                            <img src={Facebook} alt="Facebook" />
                            <FaceButton>Login with Facebook</FaceButton>
                        </IconButton>
                        <p>Don't have an account? <Link to="/Register">Register</Link></p>
                    </main>
                <Link to="/home" className="icon">
                    <p>back to home page</p>
                </Link>
                </Container>
            </LoginStyle>
            <SignInFooter />
        </>
    );
}

export default SignIn;
