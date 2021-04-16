import React, {useState, useEffect} from 'react';
import './Homepage.css'
import axios from "axios";
import TitleComponent from "../../components/TitleComponent";

function Homepage() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const [query, setQuery] = useState([]);
    const [searchValue, setSearchValue] = useState ('');
    const [idArray, setIdArray] = useState(null);
    const [input, setInput] = useState('');
    const [netflixIDArray, setNetflixIDArray] = useState(null);
    const imdbIDArray = [];


    async function fetchData() {
        setIdArray(null);
        try {
            const response = await axios.get('https://unogsng.p.rapidapi.com/search',
                {
                    headers: {
                        'x-rapidapi-key': apiKey,
                        'x-rapidapi-host': 'unogsng.p.rapidapi.com',
                    },
                    params: {
                        //voor nieuwe titels: voeg 'new date' toe en haal 'query' weg
                        //voor specifiek land: voeg 'countrylist' toe en 67 als waarde (ID van NL)
                        orderby: 'rating',
                        query: searchValue,
                    }
                });
            console.log(response);
            response && setQuery(response);
            const netflixID = response.data.results.map((result) => {
                return result.nfid;
            })
            setNetflixIDArray(netflixID);
            console.log(netflixID);
            const imdbID = response.data.results.map((result) => {
                if (result.imdbid === null || result.imdbid === "notfound") {
                    fetchDataTMDB(result.title);
                } else  {
                    imdbIDArray.push(result.imdbid);
                }
            })
            console.log(imdbIDArray);
        } catch (e) {
            console.error(e);
        }
        setInput("");
    }

    useEffect(()=>{if (searchValue) fetchData()}, [searchValue])

    async function fetchDataTMDB(title) {
        const response= await axios.get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${title}`,
            {
                headers: {
                    'x-rapidapi-key': apiKey,
                    'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
                }})
        console.log(response);
        response && imdbIDArray.push(response.data.titles[0].id);
    }

    return(
        <>
            <div id="homepage">
                <input type='text' name='searchbar' id='searchdata' placeholder='Search here' value={input}
                       onChange={(e) => {
                           {setInput(e.target.value)}
                       }} onKeyDown={(e) => {
                    if (e.key === 'Enter') {setSearchValue(input)}}}/>
                <button>Submit</button>
                <div id="component-wrapper">
                    {netflixIDArray && netflixIDArray.map((ID)=>{
                        return <TitleComponent
                            query={query}
                            id={ID}
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
