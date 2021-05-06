import React, {useState, useEffect, useContext} from 'react';
import {Redirect} from 'react-router-dom';
import './SearchPage.css'
import axios from 'axios';
import TitleComponent from '../../components/TitleComponent/TitleComponent';
import Sidebar from '../../components/Sidebar/Sidebar';
import {LocationContext} from '../../context/LocationContextProvider';
import NavBar from '../../components/NavBar/NavBar';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

function SearchPage({loginStatus, jwtToken}) {
    const [initialState, toggleInitialState] = useState(true);
    const [error, toggleError] = useState(false);
    const [errormessage, setErrormessage] = useState('');
    const [query, setQuery] = useState(null);
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const {location} = useContext(LocationContext);
    const [input, setInput] = useState('');

    async function fetchData() {
        toggleInitialState(false);
        setQuery(null);
        toggleError(false);
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
            response && setQuery(response.data.results);
            setData(response.data.results);
        } catch (e) {
            console.error(e);
            toggleError(true);
            setErrormessage("We couldn't connect you to the server. Please check your internet connection and try again.")
        }
        setInput('');
    }

    useEffect(() => {
        if (searchValue) fetchData();
    }, [searchValue]);

    return (
        <>
            {(loginStatus === 'done' || jwtToken !== null) &&
            <main className='homepage'>
                <NavBar
                    input={input}
                    setInput={setInput}
                    setSearchValue={setSearchValue}
                />
                <section className='contentpage'>
                    <Sidebar
                        data={data}
                        query={query}
                        setQuery={setQuery}
                    />
                    <section className='component-wrapper'>
                        {(query !== null && query !== undefined) && query.map((result) => {
                            return <TitleComponent
                                key={result.nfid}
                                netflixID={result.nfid}
                                imdbID={result.imdbid}
                                title={result.title}
                                image={result.img}
                                imdbRating={result.imdbrating}
                                vtype={result.vtype}
                            />
                        })}
                        {initialState && <p id='search-message'>Start searching!</p>}}
                        {query !== null && query === undefined &&
                        <p id='search-notfound'>Hmm..we couldn't find anything. Please try searching again!</p>}
                        {error && <p>{errormessage}</p>}
                    </section>
                </section>
            </main>
            }
            {(loginStatus === 'pending' && jwtToken === null) && <Redirect to='/'/>}
        </>
    )
}

export default SearchPage;
