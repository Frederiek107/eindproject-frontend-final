import React, {useContext, useState} from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import './InlogForm.css'
import {LocationContext} from "../../context/LocationContextProvider";

function InlogForm({onSubmitFunction, registerUsername, registerPassword, loginSuccess, errorMessage}) {
    const [value, setValue] = useState('');
    const [inputState, setInputState] = useState({
        username: '',
        password: '',
    });
    const {setLocation} = useContext(LocationContext);

    function handleFormChange(e) {
        setInputState({
            ...inputState,
            [e.target.name]:e.target.value
        });
    }

    function postLocation() {
        setLocation(value);
    }

    return (
            <form className='login-form' onSubmit={onSubmitFunction}>
            <label htmlFor='username'>
                Username:
                <input {...registerUsername} id='username' value={inputState.username} type='text' name='username'
                       onChange={handleFormChange}/>
            </label>
            <label htmlFor='password'>
                Password:
                <input {...registerPassword} id='password' value={inputState.password} type='password' name='password'
                       onChange={handleFormChange}/>
            </label>
            <DropdownMenu
                selectedValue={value}
                onChangeFunction={(e)=>{setValue(e.currentTarget.value)}}
            />
            <button disabled={inputState.username ==='' || inputState.password === '' || value === ''} id='login-button' onClick={postLocation}>Log in</button>
                {loginSuccess === true && <p id='inlogmessage'>Welcome! You're being redirected to the homepage.</p>}
                {errorMessage !== '' && <p id='login-error'>{errorMessage}</p>}
            </form>
    )
}

export default InlogForm;