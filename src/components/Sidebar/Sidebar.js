import React, {useState} from 'react';
import './Sidebar.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function Sidebar({data, setQuery}) {
    const [checkedMovie, toggleCheckedMovie] = useState(false);
    const [checkedSeries, toggleCheckedSeries] = useState(false);

    function handleClickMovie() {
        toggleCheckedMovie(true);
        toggleCheckedSeries(false);
    }

    function handleClickSeries () {
        toggleCheckedMovie(false);
        toggleCheckedSeries(true);
    }

    function filterSearchData() {
        setQuery(null);
        if (checkedMovie === true) {
            const filteredData = data.filter((result) => {
                return result.vtype === 'movie';
            })
            console.log(filteredData);
            setQuery(filteredData);
        }
        else if (checkedSeries === true) {
            const filteredData = data.filter((result) => {
                return result.vtype === 'series';
            })
            console.log(filteredData);
            setQuery(filteredData);
        }
    }

    return (
        <div className='sidebar'>
            <FilterCheckbox
                filtermovie={()=>{handleClickMovie()}}
                filterseries={()=>{handleClickSeries()}}
                filterdata={filterSearchData}
            />
        </div>)
}

export default Sidebar;