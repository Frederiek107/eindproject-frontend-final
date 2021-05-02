import React from 'react';
import './Searchbar.css';
import Search from '@material-ui/icons/Search'


function Searchbar({input, setInput, setSearchValue}) {

    return (
        <section className='search'>
            <input type='text' name='searchbar' id='searchbar' placeholder='Search here' value={input}
                   onChange={(e) => {
                       setInput(e.target.value)
                   }} onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    setSearchValue(input);
                }
            }}/>
            <button id='search-button' onClick={() => {
                setSearchValue(input)
            }}><Search/>
            </button>
        </section>
    )
}

export default Searchbar;