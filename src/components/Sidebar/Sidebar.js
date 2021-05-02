import React from 'react';
import './Sidebar.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function Sidebar({data, query, setQuery}) {

    return (
        <main className='sidebar'>
            <FilterCheckbox
            data={data}
            setQuery={setQuery}
            query={query}
            />
        </main>)
}

export default Sidebar;