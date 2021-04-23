import React from 'react';
import './FilterCheckbox.css'

function FilterCheckbox({filtermovie, filterseries, filterdata}) {

    return (
        <label htmlFor='checkbox' className='filter-wrapper'>
            Filter by:
            <span id='filter-options'>
                        <input type='radio' id='filter' name='filter' onClick={filtermovie}/>
                        Movies
                    </span>
            <span id='filter-options'>
                        <input type='radio' id='filter' name='filter' onClick={filterseries}/>
                        Series
                    </span>
            <button id='filter-button' onClick={filterdata}>Filter</button>
        </label>
    )}

export default FilterCheckbox;