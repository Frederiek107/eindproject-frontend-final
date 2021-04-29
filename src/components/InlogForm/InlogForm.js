import React from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import './InlogForm.css'

function InlogForm({registerUsername, registerPassword, valueUsername, valuePassword, onChangeFunction, menuValue, changeLocation, disableCondition, onClick}) {

    return (
        <>
            <label htmlFor='username'>
                Username:
                <input {...registerUsername} id='username' value={valueUsername} type='text' name='username'
                       onChange={onChangeFunction}/>
            </label>
            <label htmlFor='password'>
                Password:
                <input {...registerPassword} id='password' value={valuePassword} type='password' name='password'
                       onChange={onChangeFunction}/>
            </label>
            <DropdownMenu
                selectedValue={menuValue}
                onChangeFunction={changeLocation}
            />
            <button disabled={disableCondition} id='login-button' onClick={onClick}>Log in</button>
        </>
    )
}

export default InlogForm;