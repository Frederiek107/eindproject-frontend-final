import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './TitleDetails.css'
import removeTitleFaults from '../../helpers/removeTitleFaults';

function TitleDetails({netflixID, closePopup}) {
    const [result, setResult] = useState(null);

    async function fetchDetails() {
        try {
            const response = await axios.get('https://unogsng.p.rapidapi.com/title',
                {
                    headers: {
                        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                        'x-rapidapi-host': 'unogsng.p.rapidapi.com',
                    },
                    params: {
                        netflixid: netflixID
                    }
                });
            response && setResult(response.data.results[0]);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
            fetchDetails()
    }, [])

    return (
        <>
            <div className='popup-box'>
            {result &&
                <div className='details'>
                    <span id='details-title'>
                        <h1>{removeTitleFaults(result.title)}</h1>
                    <p className={'close-icon'} onClick={closePopup}>x</p>
                        </span>

                <span className='title-details'>
                <img id='details-image' src={result.lgimg} alt='title-image'/>

                <div id='title-info'>
                    <p><b>Release:</b> {result.year}</p>
                    <p><b>Rating:</b> {result.imdbrating}</p>
                <p><b>Runtime:</b> {result.imdbruntime}</p>
                    <p><b>Parents Guide:</b> {result.matlabel}</p>
                </div>

                </span>

                <span id='description'><b>Description</b>
                <p>{removeTitleFaults(result.synopsis)}</p>
                    </span>
                </div>
            }
            </div>
        </>
    );

}

export default TitleDetails;