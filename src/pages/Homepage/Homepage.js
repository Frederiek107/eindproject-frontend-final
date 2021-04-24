import React, {useState, useEffect, useContext} from 'react';
import './Homepage.css'
import axios from 'axios';
import TitleComponent from '../../components/TitleComponent/TitleComponent';
import Sidebar from '../../components/Sidebar/Sidebar';
import {LocationContext} from '../../context/LocationContextProvider';
import NavBar from '../../components/NavBar/NavBar';
import Searchbar from '../../components/Searchbar/Searchbar';

function Homepage() {
    const [query, setQuery] = useState([]);
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
        <NavBar/>
        <div className='contentPage'>
            <Sidebar
            data={data}
            setQuery={setQuery}
            />
            <Searchbar
            input={input}
            setInput={setInput}
            setSearchValue={setSearchValue}
            />
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
