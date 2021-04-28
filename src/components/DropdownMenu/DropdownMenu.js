import React from 'react';
import './DropdownMenu.css';

function DropdownMenu({selectedValue, onChangeFunction}) {

    return (
        <>
            <label>Choose your location: </label>
            <select id='location' name='location' value={selectedValue} onChange={onChangeFunction}>
                <option value='21'>Argentina</option>
                <option value='23'>Australia</option>
                <option value='26'>Belgium</option>
                <option value='29'>Brazil</option>
                <option value='33'>Canada</option>
                <option value='307'>Czech Republic</option>
                <option value='45'>France</option>
                <option value='39'>Germany</option>
                <option value='327'>Greece</option>
                <option value='331'>Hong Kong</option>
                <option value='334'>Hungary</option>
                <option value='265'>Iceland</option>
                <option value='337'>India</option>
                <option value='336'>Israel</option>
                <option value='269'>Italy</option>
                <option value='267'>Japan</option>
                <option value='357'>Lithuania</option>
                <option value='65'>Mexico</option>
                <option value='67'>Netherlands</option>
                <option value='392'>Poland</option>
                <option value='268'>Portugal</option>
                <option value='400'>Romania</option>
                <option value='402'>Russia</option>
                <option value='408'>Singapore</option>
                <option value='412'>Slovakia</option>
                <option value='447'>South Africa</option>
                <option value='348'>South Korea</option>
                <option value='270'>Spain</option>
                <option value='73'>Sweden</option>
                <option value='34'>Switzerland</option>
                <option value='425'>Thailand</option>
                <option value='432'>Turkey</option>
                <option value='46'>United Kingdom</option>
                <option value='78'>United States</option>
            </select>
        </>
    )
}

export default DropdownMenu;