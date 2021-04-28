import React, {useState, useEffect, useContext} from 'react';
import {Redirect} from 'react-router-dom';
import './Homepage.css'
import axios from 'axios';
import TitleComponent from '../../components/TitleComponent/TitleComponent';
import Sidebar from '../../components/Sidebar/Sidebar';
import {LocationContext} from '../../context/LocationContextProvider';
import NavBar from '../../components/NavBar/NavBar';

function Homepage({loginStatus, jwtToken}) {
    const [query, setQuery] = useState(null);
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const {location} = useContext(LocationContext);
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
                        countrylist: location,
                    }
                });
            console.log(response);
            console.log(location);
            response && setQuery(response.data.results);
            setData(response.data.results);
        } catch (e) {
            console.error(e);
        }
        setInput('');
    }

    useEffect(() => {
        if (searchValue) fetchData()
    }, [searchValue])

    return (
        <>
            {(loginStatus === 'done' || jwtToken !== null) &&
            <div className = 'homepage'>
                <NavBar
                    input={input}
                    setInput={setInput}
                    setSearchValue={setSearchValue}
                />
                <div className='contentpage'>
                    <Sidebar
                        data={data}
                        setQuery={setQuery}
                    />
                    <div className='component-wrapper'>
                        {query!==null ? query.map((result) => {
                            return <TitleComponent
                                key={result.nfid}
                                netflixID={result.nfid}
                                imdbID={result.imdbid}
                                title={result.title}
                                image={result.img}
                                imdbRating={result.imdbrating}
                                vtype={result.vtype}
                            />
                        }) : <div id='message'>Start searching!</div> }
                    </div>
                </div>
            </div>
            }
            {(loginStatus === 'pending' && jwtToken === null) && <Redirect to='/'/>}
        </>
    )
}

export default Homepage;
