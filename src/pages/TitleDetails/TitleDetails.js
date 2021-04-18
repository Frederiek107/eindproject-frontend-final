import React, {useEffect, useState} from 'react';
import axios from "axios";
import ReactPlayer from "react-player";
import {useLocation, useParams} from 'react-router-dom'
import './TitleDetails.css'

function DetailsPage() {

    const location = useLocation();
    const netflixID = location.state.netflixID;
    const imdbID = location.state.imdbID;
    const vtype = location.state.vtype;
    const [movieID, setMovieID] = useState('');
    const [seriesID, setSeriesID] = useState('');
    const [trailer, setTrailer] = useState('');
    const [responseUNOGS, setResponseUNOGS] = useState(null);
    const [responseIMDB, setResponseIMDB] = useState(null);

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
            response && setResponseUNOGS(response);
            console.log(response);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        if (imdbID === null || imdbID === "notfound") {
            fetchDetailsUnogs()
        }
    }, [])


    async function fetchIMDBDetails() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/157336?api_key=${process.env.REACT_APP_API_KEY2}&append_to_response=videos`);
            console.log(response);
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(() => {
        if (imdbID !== null && imdbID !== "notfound") {
            fetchIMDBDetails()
        }
    }, []);


    return (
        <>
            {responseUNOGS !== null &&
            responseUNOGS.data.results.map((result) => {
                return (
                    <div className="details-page">
                        <h1 id="details-title">{result.title}</h1>
                        <img id="details-image" src={result.lgimg} alt="title-image"/>
                        <span id="details">
                <div>Release: {result.year}</div>
                <div>Rating: {result.imdbrated}</div>
                <div>Runtime: {result.imdbruntime}</div>
                <div><b>Description</b></div>
                <div>{result.synopsis}</div>
                </span>
                    </div>
                )
            })}
            {/*{responseUNOGS === null &&
                responseIMDB.map((result)=>{
                return <>
                    <div>{result.title}</div>
                    <div>{result.year}</div>
                    <div>{result.length}</div>
                    <div>{result.rating}</div>
                    <span id="media">
                <ReactPlayer
                    url={result.trailer.link}
                    width={550}
                    height={400}
                    controls
                    light={true}
                />
                </span>
                    <div>{result.plot}</div>
                    </>
                })}*/}
        </>
    );
}

export default DetailsPage;