import React, {useState} from 'react';
import './CountryMenu.css'
import Dropdown from 'react-dropdown';

function CountryMenu() {
    const options = ['option1', 'option2', 'option3'];

    return (
        <div className="dropdown-container">
            Choose your country: <Dropdown className='dropdown-menu' options={options} placeholder="choose"/>
        </div>
    )
}

export default CountryMenu;