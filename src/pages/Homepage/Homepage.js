import React, {useState, useEffect} from 'react';
import './Homepage.css'
import axios from "axios";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import Sidebar from "../../components/Sidebar/Sidebar";

function Homepage() {
    const [query, setQuery] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [input, setInput] = useState('');

    async function fetchData() {
        setQuery(null);
        try {
            const response = await axios.get('https://unogsng.p.rapidapi.com/search',
                {
                    headers: {
                        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                        'x-rapidapi-host': 'unogsng.p.rapidapi.com',
                    },
                    params: {
                        orderby: 'rating',
                        query: searchValue,
                        countrylist: 67,
                    }
                });
            console.log(response);
            response && setQuery(response.data.results);
        } catch (e) {
            console.error(e);
        }
        setInput("");
    }

    useEffect(() => {
        if (searchValue) fetchData()
    }, [searchValue])

    /*function filterDataMovie() {
        const filteredData = query.filter((result) => {
            return result.vtype === "movie";
        })
    }*/

    return (
        <>
            <Sidebar/>
            <div id='homepage'>
                <input type='text' name='searchbar' id='searchbar' placeholder='Search here' value={input}
                       onChange={(e) => {
                           setInput(e.target.value)
                       }} onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        setSearchValue(input);
                    }
                }}/>
                <label htmlFor='checkbox' className='filter-wrapper'>
                    Filter by:
                    <span id="filter-options">
                        <input type='radio' id='filter' name='filtermovies'/>
                        Movies
                    </span>
                    <span id="filter-options">
                        <input type='radio' id='filter' name='filterseries'/>
                        Series
                    </span>
                    <button id='filter-button'>Filter</button>
                </label>
                <div className='component-wrapper'>
                    {query && query.map((result) => {
                        return <TitleComponent
                            netflixID={result.nfid}
                            imdbID={result.imdbid}
                            title={result.title}
                            image={result.img}
                            imdbRating={result.imdbrating}
                            vtype={result.vtype}
                        />
                    })}
                </div>
            </div>
        </>
    )
}

export default Homepage;
