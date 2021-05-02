import React, {useState} from 'react';
import './FilterCheckbox.css';
import {FaFilter} from 'react-icons/fa';
import {ImCross} from 'react-icons/im';

function FilterCheckbox({data, setQuery}) {
    const [checkedMovie, toggleCheckedMovie] = useState(false);
    const [checkedSeries, toggleCheckedSeries] = useState(false);
    const [filter, setFilter] = useState('');

    function handleClickMovie() {
        toggleCheckedMovie(true);
        toggleCheckedSeries(false);
    }

    function handleClickSeries() {
        toggleCheckedMovie(false);
        toggleCheckedSeries(true);
    }

    function filterSearchData() {
        setQuery(null);
        if (checkedMovie === true && checkedSeries === false) {
            setFilter('movies');
            const filteredData = data.filter((result) => {
                return result.vtype === 'movie';
            })
            setQuery(filteredData);
        }
        if (checkedSeries === true && checkedMovie === false) {
            setFilter('series');
            const filteredData = data.filter((result) => {
                return result.vtype === 'series';
            })
            setQuery(filteredData);
        }
    }

    function removeFilters() {
        setFilter('');
        setQuery(data);
    }

    return (
        <>
            <label htmlFor='checkbox' className='filter-wrapper'>
                Filter by:
                <span id='filter-options'>
                        <input type='radio' id='filter' name='filter' onClick={handleClickMovie}/>
                        Movies
                    </span>
                <span id='filter-options'>
                        <input type='radio' id='filter' name='filter' onClick={handleClickSeries}/>
                        Series
                    </span>
                <button id='filter-button' onClick={filterSearchData}>Filter</button>
            </label>
            {filter !== '' &&
            <section id={'filter-info'}>
                <section><FaFilter id='filter-icon'/>
                    <div id={'selected-filter'}>{filter}</div>
                </section>
                {<p onClick={removeFilters}><ImCross id='delete-icon'/>Remove filter</p>}
            </section>}
        </>
    )
}

export default FilterCheckbox;