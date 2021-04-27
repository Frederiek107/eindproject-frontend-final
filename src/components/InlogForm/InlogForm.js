import React from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import './Inlogform.css'

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
            <button disabled={disableCondition} id='login-button' onClick={onClick}>Submit</button>
        </>
    )
}

export default InlogForm;