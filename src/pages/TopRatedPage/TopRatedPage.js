import React, {useEffect, useState} from 'react';
import axios from "axios";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import './TopRatedPage.css'

function TopRatedPage() {
    const [query, setQuery] = useState([]);

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
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchTopRated();
    }, [])

    return (
        <div id="component-wrapper">
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
    )
}

export default TopRatedPage;