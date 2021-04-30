import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import TitleComponent from '../../components/TitleComponent/TitleComponent';
import Sidebar from '../../components/Sidebar/Sidebar';
import {LocationContext} from '../../context/LocationContextProvider';
import NavBar from '../../components/NavBar/NavBar';
import {Redirect} from "react-router-dom";

function TopRatedPage({loginStatus, jwtToken}) {
    const [error, toggleError] = useState(false);
    const [errormessage, setErrormessage] = useState('')
    const [query, setQuery] = useState([]);
    const [data, setData] = useState([]);
    const {location} = useContext(LocationContext);

    async function fetchTopRated() {
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
                        limit: '100',
                        countrylist: location,
                    }
                });
            response && setQuery(response.data.results);
            setData(response.data.results);
        } catch (e) {
            toggleError(true);
            setErrormessage("We couldn't connect you to the server. Please check your internet connection and try again.");
            console.error(e);
        }
    }

    useEffect(() => {
        fetchTopRated();
    }, [])

    return (
        <>
            {(loginStatus === 'done' || jwtToken !== null) &&
            <>
                <NavBar/>
                <main className='contentpage'>
                    <Sidebar
                        data={data}
                        setQuery={setQuery}
                    />
                    <section className='component-wrapper'>
                        {query && query.map((result) => {
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
                        {error && <p>{errormessage}</p>}
                    </section>
                </main>
            </>
            }
            {(loginStatus === 'pending' && jwtToken === null) && <Redirect to='/'/>}
        </>
    )
}

export default TopRatedPage;