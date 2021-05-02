import React from 'react';
import './Sidebar.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function Sidebar({data, setQuery}) {

    return (
        <main className='sidebar'>
            <FilterCheckbox
            data={data}
            setQuery={setQuery}
            />
        </main>)
}

export default Sidebar;