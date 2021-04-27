import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useLocation, useParams} from 'react-router-dom'
import './TitleDetails.css'

function DetailsPage() {

    const location = useLocation();
    const netflixID = location.state.netflixID;
    const imdbID = location.state.imdbID;
    const vtype = location.state.vtype;

    async function fetchDetailsUnogs() {
        console.log("HOE VAAK WORDT UNOGS AANGEROEPEN?")
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
/*
            response && setResponseUNOGS(response);
*/
            console.log(response);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        if (imdbID === null || imdbID === 'notfound') {
            fetchDetailsUnogs()
        }
    }, [])

    return (
        <>
            {/*{responseUNOGS !== null &&
            responseUNOGS.data.results.map((result) => {
                return (
                    <div className='details-page'>
                        <h1 id='details-title'>{result.title}</h1>
                        <img id='details-image' src={result.lgimg} alt='title-image'/>
                        <span id='details'>
                <div>Release: {result.year}</div>
                <div>Rating: {result.imdbrated}</div>
                <div>Runtime: {result.imdbruntime}</div>
                <div><b>Description</b></div>
                <div>{result.synopsis}</div>
                </span>
                    </div>
                )*/}
            })}
        </>
    );
}

export default DetailsPage;