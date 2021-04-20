import React, {useState, useEffect, useContext} from 'react';
import './Homepage.css'
import axios from "axios";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import Sidebar from "../../components/Sidebar/Sidebar";
import {LocationContext} from "../../components/context/LocationContextProvider";
import {useLocation} from "react-router-dom";

function Homepage() {
    const [query, setQuery] = useState([]);
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [input, setInput] = useState('');
    const [checkedMovie, toggleCheckedMovie] = useState(false);
    const [checkedSeries, toggleCheckedSeries] = useState(false);
    const {location} = useContext(LocationContext);

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
                        countrylist: location,
                    }
                });
            console.log(response);
            response && setQuery(response.data.results);
            setData(response.data.results);
        } catch (e) {
            console.error(e);
        }
        setInput("");
    }

    useEffect(() => {
        if (searchValue) fetchData()
    }, [searchValue])

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
                return result.vtype === "movie";
            })
            console.log(filteredData);
            setQuery(filteredData);
        }
        else if (checkedSeries === true) {
            const filteredData = data.filter((result) => {
                return result.vtype === "series";
            })
            console.log(filteredData);
            setQuery(filteredData);
        }
    }

    return (
        <div className="contentPage">
            <Sidebar/>
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
                        <input type='radio' id='filter' name='filter' onClick={()=>{handleClickMovie()}}/>
                        Movies
                    </span>
                    <span id="filter-options">
                        <input type='radio' id='filter' name='filter' onClick={()=>{handleClickSeries()}}/>
                        Series
                    </span>
                    <button id='filter-button' onClick={filterSearchData}>Filter</button>
                </label>
                <div className="component-wrapper">
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
    )
}

export default Homepage;
