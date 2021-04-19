import React, {useEffect, useState} from 'react';
import axios from "axios";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import './TopRatedPage.css'
import Sidebar from "../../components/Sidebar/Sidebar";

function TopRatedPage() {
    const [query, setQuery] = useState([]);
    const [checkedMovie, toggleCheckedMovie] = useState(false);
    const [checkedSeries, toggleCheckedSeries] = useState(false);
    const [data, setData] = useState([]);

    async function fetchTopRated() {
        try {
            const response = await axios.get('https://unogsng.p.rapidapi.com/search',
                {
                    headers: {
                        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                        'x-rapidapi-host': 'unogsng.p.rapidapi.com',
                    },
                    params: {
                        orderby: 'rating',
                        limit: '100',
                        countrylist: '67'
                    }
                });
            console.log(response);
            response && setQuery(response.data.results);
            setData(response.data.results);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchTopRated();
    }, [])

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
        </div>
    )
}

export default TopRatedPage;