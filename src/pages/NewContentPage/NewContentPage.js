import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import TitleComponent from '../../components/TitleComponent/TitleComponent';
import Sidebar from '../../components/Sidebar/Sidebar';
import {LocationContext} from '../../context/LocationContextProvider';
import fetchDate from '../../helpers/fetchDate';
import NavBar from "../../components/NavBar/NavBar";

function NewContentPage() {
    const [query, setQuery] = useState([]);
    const [data, setData] = useState([]);
    const {location} = useContext(LocationContext);

    async function fetchNewContent() {
        console.log(location);
        console.log(fetchDate());
        try {
            const response = await axios.get('https://unogsng.p.rapidapi.com/search',
                {
                    headers: {
                        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                        'x-rapidapi-host': 'unogsng.p.rapidapi.com',
                    },
                    params: {
                        newdate: fetchDate(),
                        countrylist: location,
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
        fetchNewContent()
    }, [])

    return (
        <>
            <NavBar/>
            <div className='contentPage'>
                <Sidebar
                    data={data}
                    setQuery={setQuery}
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

export default NewContentPage;