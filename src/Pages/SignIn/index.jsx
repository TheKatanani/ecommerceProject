import React, { useState } from 'react';
import { validationSchemaSignIn } from '../../validationSchema';
import { LoginStyle } from './styles';
import Input from '../../Components/Input';
import Checkbox from '../../Components/Checkbox';
import logInPassword from '../../Images/VectorpasswordIcon.png'
import { Link } from 'react-router-dom';
import Facebook from '../../Images/facebook.png'
import Google from '../../Images/google.png'
import Or from '../../Components/Or';
import SignInFooter from '../../Components/SignFooter';

import { Container, FaceButton, GoogleButton, IconButton, LogInButton } from '../../Global/components';
function SignIn() {
    const [formData, setFormData] = useState({ name: '', password: '', remember: false });
    const [errors, setErrors] = useState({});
    const [passwordType, setPasswordType] = useState("password");
    const [isChecked, setIsChecked] = useState(false);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        setFormData({ ...formData, remember: event.target.checked });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!errors&&isChecked);
        validationSchemaSignIn
            .validate(formData, { abortEarly: false })
            .then(() => localStorage.setItem("isAuthenticated",true))//you shod reWrite this component 
            .catch((err) => setErrors(err.inner));
    };
    return (
        <>
        <LoginStyle>
            <Container>
            <main>
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit}>
                    <Input
                        onChange={handleInputChange}
                        id="name"
                        type="text"
                        placeholder="Email or phone"
                        label="Username"
                        value={formData.name}
                    />
                    {/* *************************** */}
                    <div className={`logInPassword ${passwordType}`}>
                        <span>
                            <img src={logInPassword} alt="" onClick={() => {
                                setPasswordType(`${passwordType === "password" ? "text" : "password"}`)
                            }} />
                        </span>
                        <Link to="/#" className='forgotPassword'>Forgot Password</Link>
                        <Input
                            onChange={handleInputChange}
                            id="password"
                            type={passwordType}
                            placeholder="Type here"
                            label="Password"
                            value={formData.password}
                        />
                    </div>
                    {/* *********************** */}
                    <Checkbox id="Remember" label="Remember me" onChange={handleCheckboxChange} />
                    <LogInButton type="submit">Login</LogInButton>
                </form>
                <Or/>
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
            </Container>
                </LoginStyle>
            <SignInFooter/>
            </>
    );
}

export default SignIn;
