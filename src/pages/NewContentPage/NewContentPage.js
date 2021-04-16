import React, {useEffect, useState} from 'react';
import axios from "axios";
import TitleComponent from "../../components/TitleComponent";

function NewContentPage() {
    const [idArray, setIdArray] = useState([]);
    const [query, setQuery] = useState([]);

    async function fetchNewContent() {
        const today = new Date();
        today.setDate(today.getDate()-14);
        const searchDate = today.toISOString().slice(0, 10);
        console.log(searchDate);
        try {
            const resultQuery = await axios.get('https://unogsng.p.rapidapi.com/search',
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
            console.log(resultQuery);
            resultQuery && setQuery(resultQuery);
            const resultQueryID = resultQuery.data.results.map((result) => {
                return result.nfid;
            })
            setIdArray(resultQueryID);
            console.log(resultQueryID);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(()=>{fetchNewContent()},[])

    return(

        <div id="component-wrapper">
            {idArray.map((ID)=>{
                return <TitleComponent
                    query={query}
                    id={ID}
                />
            })}
        </div>
    )

}

export default NewContentPage;