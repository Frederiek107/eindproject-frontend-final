import React, {useContext, useState} from 'react';
import './Loginpage.css';
import {useForm} from 'react-hook-form';
import {LocationContext} from '../../context/LocationContextProvider';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {UserContext} from '../../context/UserContext';
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu';

//nog toevoegen: maak button onklikbaar als gegevens nog niet zijn ingevuld (ook voor sign up page)

function Loginpage() {
    const {login} = useContext(UserContext);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [value, setValue] = useState('');
    const {location, setLocation} = useContext(LocationContext);
    const [loginSuccess, toggleLoginSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    async function onSubmit(data) {
        try {
            const response = await axios.post('https://polar-lake-14365.herokuapp.com/api/auth/signin', data);
            const jwtToken = response.data.accessToken;
            console.log(response);
            console.log(data);
            login(jwtToken);
            toggleLoginSuccess(true);
        } catch (e) {
            console.error(e);
            setErrorMessage("We couldn't find the username and password you entered. Please try again!");
        }
    }

    function postLocation() {
        console.log(value);
        setLocation(value);
        console.log(`AANGEKLIKT: ${value}`);
        console.log(`INGESTELDE LOCATIE: ${location}`);
    }

    return (

        <div id='page'>
            <div className='login-container'>
                <h1 id='login-title'>Log in</h1>
                <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='username'>
                        Username:
                        <input id='username' type='input' name='username' {...register('username')}/>
                    </label>
                    <label htmlFor='password'>
                        Password:
                        <input id='password' type='input' name='password' {...register('password')}/>
                    </label>
                    <DropdownMenu
                    selectedValue={value}
                    onChangeFunction={(e)=>{setValue(e.currentTarget.value)}}
                    />
                    {loginSuccess === true && <p>Welcome! You're being redirected to the profile page.</p>}
                    {errorMessage !== '' && <p id='login-error'>{errorMessage}</p>}
                    <button id='login-button' onClick={postLocation}>Submit</button>
                </form>
            </div>
            <div id='signup'>
                <NavLink to='/signup'>No account? Sign up here!</NavLink>
            </div>
        </div>
    )
}

export default Loginpage;