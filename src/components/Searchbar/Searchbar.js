import React from 'react';
import './Searchbar.css';

function Searchbar({input, setInput, setSearchValue}) {

    return (
        <input type='text' name='searchbar' id='searchbar' placeholder='Search here' value={input}
               onChange={(e) => {
                   setInput(e.target.value)
               }} onKeyDown={(e) => {
            if (e.key === 'Enter') {
                setSearchValue(input);
            }
        }}/>
    )
}

export default Searchbar;