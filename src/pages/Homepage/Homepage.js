import React, {useState, useEffect} from 'react';
import './Homepage.css'
import axios from "axios";
import TitleComponent from "../../components/TitleComponent/TitleComponent";

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
                        //voor nieuwe titels: voeg 'new date' toe en haal 'query' weg
                        //voor specifiek land: voeg 'countrylist' toe en 67 als waarde (ID van NL)
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

    return (
        <>
            <div id="homepage">
                <input type='text' name='searchbar' id='searchbar' placeholder='Search here' value={input}
                       onChange={(e) => {
                           {setInput(e.target.value)}
                       }} onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        setSearchValue(input)
                    }
                }}/>
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


                {/*/*<div className="arrowed">
            <div class="arrow-1" onClick={console.log("hallo")}></div>
            </div>
            <div className="arrowed">
                <div className="arrow-2"></div>
            </div>*!/*/}
            </div>
        </>
    )
}

export default Homepage;
