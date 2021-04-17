import React, {useEffect, useState} from 'react';
import axios from "axios";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
/*import NavigateBefore from '@material-ui/icons/NavigateBefore'
import NavigateAfter from '@material-ui/icons/NavigateAfter'*/

function NewContentPage() {
    const [query, setQuery] = useState([]);

    async function fetchNewContent() {
        const today = new Date();
        today.setDate(today.getDate() - 14);
        const searchDate = today.toISOString().slice(0, 10);
        console.log(searchDate);
        try {
            const response = await axios.get('https://unogsng.p.rapidapi.com/search',
                {
                    headers: {
                        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                        'x-rapidapi-host': 'unogsng.p.rapidapi.com',
                    },
                    params: {
                        newdate: searchDate,
                        countrylist: 67,
                    }
                });
            console.log(response);
            response && setQuery(response.data.results);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchNewContent()
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

export default NewContentPage;