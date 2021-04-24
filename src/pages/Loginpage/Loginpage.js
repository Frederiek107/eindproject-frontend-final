import React, {useContext, useState} from 'react';
import './Loginpage.css';
import {useForm} from 'react-hook-form';
import {LocationContext} from '../../context/LocationContextProvider';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {UserContext} from '../../context/UserContext';
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu';

function Loginpage() {
    const {login} = useContext(UserContext);
    const {register, handleSubmit} = useForm();
    const [value, setValue] = useState('');
    const {location, setLocation} = useContext(LocationContext);
    const [loginSuccess, toggleLoginSuccess] = useState(false);

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
        }
    }

    function handleChange(e) {
        setValue(e.currentTarget.value);
    }

    function postLocation() {
        setLocation(value);
        console.log(`AANGEKLIKT: ${value}`);
        console.log(`INGESTELDE LOCATIE: ${location}`);
    }

    return (

        <div id='page'>
            <div id='login'>
                <h1>Log in</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    onChangeFunction={handleChange}
                    />
                    <button onClick={postLocation}>Submit</button>
                    {loginSuccess === true && <p>Welcome! You're being redirected to the profile page.</p>}
                </form>
            </div>
            <div id='signup'>
                <NavLink to='/signup'>No account? Sign up here!</NavLink>
            </div>
        </div>
    )
}

export default Loginpage;