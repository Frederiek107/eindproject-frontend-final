import React, {useState} from 'react';
import './CountryMenu.css'

function CountryMenu() {
    const [value, setValue] = useState('');
    const options = [{name: 'Argentina', id:21}, {name: 'Australia', id: 23}, {name: 'Belgium', id: 26}];

    function handleChange(e) {
        setValue(e.currentTarget.value);
        console.log(value);
    }

    return (
        /*<div className="dropdown-container">
            Choose your country: <Dropdown className='dropdown-menu' options={options} placeholder="choose"/>
        </div>*/
        <>
        </>
    )
}

export default CountryMenu;