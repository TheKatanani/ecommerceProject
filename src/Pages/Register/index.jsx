import React, { useState } from 'react';
import { validationSchemaRegister } from '../../validationSchema';
import { RegisterStyled } from './styles';
import Input from '../../Components/Input';
import Checkbox from '../../Components/Checkbox';
import { Link } from 'react-router-dom';
import SignFooter from '../../Components/SignFooter';

import { Container, LogInButton } from '../../Global/components';
import Select from '../../Components/Select';
import { selectData } from '../../Mock';


function Register({ handleLogin }) {
    const [formData, setFormData] = useState({ name: '', password: '', agree: false, Surname: "", email: "" });
    const [errors, setErrors] = useState({});
    const [isChecked, setIsChecked] = useState(false);
    const [Phone, setPhone] = useState("");

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
        validationSchemaRegister
            .validate(formData, { abortEarly: false })
            .then(() => handleLogin(formData))
            .catch((err) => setErrors(err.inner));
    };
    return (
        <>
            <RegisterStyled>
                <Container>
                    <main>
                        <h1>Register</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="name">

                                <Input
                                    onChange={handleInputChange}
                                    id="name"
                                    type="text"
                                    placeholder="Type here"
                                    label="Name"
                                    value={formData.name}
                                />
                                <Input
                                    onChange={handleInputChange}
                                    id="Surname"
                                    type="text"
                                    placeholder="Type here"
                                    label="Surname"
                                    value={formData.Surname}
                                />
                            </div>
                            {/* *************************** */}

                            <Input
                                onChange={handleInputChange}
                                id="password"
                                type="email"
                                placeholder="example@mail.com"
                                label="Your e-mail "
                                value={formData.email}
                            />
                            <div className="phone">
                                <label htmlFor="Phone">Phone</label>
                                <div>
                                    <Select
                                        defualt
                                        value={Phone}
                                        onChange={e => setPhone(e.target.value)}
                                        options={selectData.Phone}
                                    />
                                    <Input
                                        onChange={handleInputChange}
                                        id="Phone"
                                        type="number"
                                        placeholder="00-000-00-00"
                                        label=""
                                        value={formData.password}
                                    />
                                </div>
                            </div>
                            <Input
                                onChange={handleInputChange}
                                id="password"
                                type="Password"
                                placeholder="Type here"
                                label="Password"
                                value={formData.password}
                            />
                            <Input
                                onChange={handleInputChange}
                                id="rePassword"
                                type="Password"
                                placeholder="Type here"
                                label="Repeat password"
                                value={formData.password}
                            />
                            {/* *********************** */}
                            <LogInButton type="submit">Register now</LogInButton>
                            <Checkbox id="agree" label="I agree with " primary="Terms and Conditions" onChange={handleCheckboxChange} />
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
