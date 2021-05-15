import React from 'react';
import './Sidebar.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import ScrollToTop from "../ScrollToTop/ScrollToTop";

function Sidebar({data, query, setQuery}) {

    return (
        <span className='sidebar'>
            <FilterCheckbox
            data={data}
            setQuery={setQuery}
            query={query}
            />
            <ScrollToTop/>
        </span>)
}

export default Sidebar;