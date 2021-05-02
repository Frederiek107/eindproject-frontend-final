import React, {useContext, useState} from 'react';
import './Loginpage.css';
import {useForm} from 'react-hook-form';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {UserContext} from '../../context/UserContext';
import InlogForm from '../../components/InlogForm/InlogForm';

function Loginpage() {
    const {login} = useContext(UserContext);
    const {register, handleSubmit} = useForm();
    const [loginSuccess, toggleLoginSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    async function onSubmit(data) {
        setErrorMessage('');
        try {
            const response = await axios.post('https://polar-lake-14365.herokuapp.com/api/auth/signin', data);
            const jwtToken = response.data.accessToken;
            login(jwtToken);
            toggleLoginSuccess(true);
        } catch (e) {
            console.error(e);
            setErrorMessage("We couldn't find the username and password you entered. Please try again!");
        }
    }

    return (

        <main id='page'>
            <section className='login-container'>
                <h1 id='login-title'>Log in</h1>
                <InlogForm
                    onSubmitFunction={handleSubmit(onSubmit)}
                    registerUsername={{...register('username')}}
                    registerPassword={{...register('password')}}
                    loginSuccess={loginSuccess}
                    errorMessage={errorMessage}
                />
            </section>
            <section id='signup'>
                <NavLink to='/signup'>No account? Sign up here!</NavLink>
            </section>
        </main>
    )
}

export default Loginpage;