import React, { useContext, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { validationSchemaRegister } from '../../validationSchema';
import Input from '../../Components/Input';
import Checkbox from '../../Components/Checkbox';
import SignFooter from '../../Components/SignFooter';
import Select from '../../Components/Select';
import { Container, LogInButton } from '../../Global/components';
import { RegisterStyled } from './styles';
import { selectData } from '../../Mock';
import axios from 'axios';
import { API } from '../../API';
import { AuthContext } from '../../Context';
import ErrorForm from '../../Components/ErrorForm';
import { ACTIONS } from '../../Actions';
const initialState = {
    name: "",
    Surname: "",
    email: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
    error: {},
    passwordStrength: "",
    selectPhone: "",
    isWrongRepeat: false,
    isSuccessfullyRegistered: false,
    isChecked: false,
    isLoading: false,
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
                error: action.error,
            };
        case ACTIONS.SELECT_PHONE:
            return {
                ...state,
                selectPhone: action.value,
            };
        default:
            return state;
    }
};

function Register() {
    const [formState, dispatch] = useReducer(reducer, initialState);
    const [, setIsAuthenticated] = useContext(AuthContext);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        dispatch({ type: ACTIONS.HANDLE_INPUT_CHANGE, id, value });
    };
    useEffect(() => {
        return () => {
            dispatch({ type: ACTIONS.REGISTED, value: false })
        }
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.LOADING, isLoading: true });
        try {
            await validationSchemaRegister.validate(formState, { abortEarly: false });
            const res = await axios.post(`${API}/users/signup`, {
                name: formState.name,
                // Surname: formState.Surname,
                email: formState.email,
                password: formState.password,
                // confirmPassword: formState.confirmPassword,
                // isChecked: formState.isChecked
            });
            if (res.data) {
                localStorage.setItem('token', res.data.token);
                setIsAuthenticated(true)
            }
        } catch (error) {
            const errors = error.inner?.reduce((acc, { path, message }) => {
                acc[path] = message;
                return acc;
            }, {});
            dispatch({ type: ACTIONS.ERROR, error: errors });
        } finally {
            dispatch({ type: ACTIONS.LOADING, isLoading: false });
        }
    };

    return (
        <>
            <RegisterStyled>
                <Container>
                    <main>
                        <h1>Register</h1>
                        <form onSubmit={handleSubmit}>
                            {formState.error?.name && <ErrorForm>{formState.error?.name}</ErrorForm>}
                            {formState.error?.Surname && <ErrorForm>{formState.error?.Surname}</ErrorForm>}
                            <div className="name">
                                <Input
                                    onChange={handleInputChange}
                                    id="name"
                                    type="text"
                                    placeholder="Type here"
                                    label="Name"
                                    value={formState.name}
                                />
                                <Input
                                    onChange={handleInputChange}
                                    id="Surname"
                                    type="text"
                                    placeholder="Type here"
                                    label="Surname"
                                    value={formState.Surname}
                                />
                            </div>
                            {/* *************************** */}
                            {formState.error?.email && <ErrorForm>{formState.error?.email}</ErrorForm>}
                            <Input
                                onChange={handleInputChange}
                                id="email"
                                type="email"
                                placeholder="example@mail.com"
                                label="Your e-mail "
                                value={formState.email}
                            />
                            {formState.error?.phoneNumber && <ErrorForm>{formState.error?.phoneNumber}</ErrorForm>}
                            <div className="phone">
                                <label htmlFor="Phone">Phone</label>
                                <div>
                                    <Select
                                        defualt
                                        value={formState.selectPhone}
                                        onChange={e => dispatch({ type: ACTIONS.SELECT_PHONE, value: e.target.value })}
                                        options={selectData.Phone}
                                    />
                                    <Input
                                        onChange={handleInputChange}
                                        id="phoneNumber"
                                        type="number"
                                        placeholder="00-000-00-00"
                                        label=""
                                        value={formState.phoneNumber}
                                    />
                                </div>
                            </div>
                            {formState.error?.password && <ErrorForm>{formState.error?.password}</ErrorForm>}
                            <Input
                                onChange={handleInputChange}
                                id="password"
                                type="Password"
                                placeholder="Type here"
                                label="Password"
                                value={formState.password}
                            />
                            {formState.error?.confirmPassword && <ErrorForm>{formState.error?.confirmPassword}</ErrorForm>}
                            <Input
                                onChange={handleInputChange}
                                id="confirmPassword"
                                type="Password"
                                placeholder="Type here"
                                label="Repeat password"
                                value={formState.confirmPassword}
                            />
                            {/* *********************** */}
                            <LogInButton type="submit">{formState.isLoading ? "loading..." : "Register now"}</LogInButton>
                            {formState.error?.isChecked && <ErrorForm>{formState.error?.isChecked}</ErrorForm>}
                            <Checkbox id="agree" label="I agree with " primary="Terms and Conditions" onChange={(e) => dispatch({ type: ACTIONS.HANDLE_CHECKBOX_CHANGE, checked: e.target.checked })} />
                        </form>
                        <p>Already have an accaunt? <Link to="/">Logn in </Link></p>
                    </main>
                </Container>
            </RegisterStyled>
            <SignFooter />
        </>
    );
}

export default Register;
