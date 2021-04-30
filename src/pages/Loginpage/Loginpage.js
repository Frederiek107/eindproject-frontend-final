import React, {useContext, useState} from 'react';
import './Loginpage.css';
import {useForm} from 'react-hook-form';
import {LocationContext} from '../../context/LocationContextProvider';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {UserContext} from '../../context/UserContext';
import InlogForm from '../../components/InlogForm/InlogForm';


function Loginpage() {
    const {login} = useContext(UserContext);
    const {register, handleSubmit} = useForm();
    const [value, setValue] = useState('');
    const {setLocation} = useContext(LocationContext);
    const [loginSuccess, toggleLoginSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [inputState, setInputState] = useState({
        username: '',
        password: '',
    });

    async function onSubmit(data) {
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

    function postLocation() {
        setLocation(value);
    }

    function handleFormChange(e) {
        setInputState({
            ...inputState,
            [e.target.name]:e.target.value
        });
    }

    return (

        <main id='page'>
            <section className='login-container'>
                <h1 id='login-title'>Log in</h1>
                <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                <InlogForm
                    registerUsername={{...register('username')}}
                    registerPassword={{...register('password')}}
                    valueUsername={inputState.username}
                    valuePassword={inputState.password}
                    onChangeFunction={handleFormChange}
                    menuValue={value}
                    changeLocation={(e)=>{setValue(e.currentTarget.value)}}
                    disableCondition={inputState.username ==='' || inputState.password === ''}
                    onClick={postLocation}
                />
                    {loginSuccess === true && <p  id='inlogmessage'>Welcome! You're being redirected to the profile page.</p>}
                    {errorMessage !== '' && <p id='login-error'>{errorMessage}</p>}
                </form>
            </section>
            <section id='signup'>
                <NavLink to='/signup'>No account? Sign up here!</NavLink>
            </section>
        </main>
    )
}

export default Loginpage;