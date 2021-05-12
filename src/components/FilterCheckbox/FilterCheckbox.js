import React, {useState} from 'react';
import './FilterCheckbox.css';
import {FaFilter} from 'react-icons/fa';
import {ImCross} from 'react-icons/im';

function FilterCheckbox({data, setQuery, query}) {
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
                <section id='filter-options'>
                        <input type='radio' id='filter-movie' name='filter' onClick={handleClickMovie}/>
                    <label htmlFor='filter-movie'>Movies</label>
                    </section>
                <section id='filter-options'>
                        <input type='radio' id='filter-series' name='filter' onClick={handleClickSeries}/>
                      <label htmlFor='filter-series'>Series</label>
                    </section>
                <button id='filter-button' onClick={filterSearchData} disabled={(checkedSeries===false && checkedMovie===false) || query===null}>Filter</button>
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