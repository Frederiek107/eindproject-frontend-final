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

 /* async function fetchDetailsUnogs() {
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
    useEffect(()=>{if (imdbID === null || imdbID === "notfound") {fetchDetailsUnogs()}},[])


    async function fetchTMDBID() {
        try {
            const response = imdbID && await axios.get(`https://api.themoviedb.org/3/find/${imdbID}?api_key=${process.env.REACT_APP_API_KEY2}&language=en-US&external_source=imdb_id`);
            if (vtype === "series") {
                const seriesid = response.data.tv_results.map((series) => {
                    return series.id;
                });
                const seriesID = seriesid[0];
                setSeriesID(seriesID);
            } else if (vtype === "movies") {
                const movieid = response.data.movie_results.map((movie) => {
                    return movie.id;
                })
                const movieID = movieid[0];
                setMovieID(movieID);
            }
        } catch (e) {
            console.error(e);
        }
    }
   useEffect(()=> {if (imdbID !== null && imdbID !== "notfound") {fetchTMDBID()}}, []);

    async function fetchTMDBvideo() {
        if (movieID) {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${process.env.REACT_APP_API_KEY2}`);
                const urlKey = response.data.results[0].key;
                const url = `https://www.youtube.com/watch?v=${urlKey}`;
                setTrailer(url);
            } catch (e) {
                console.error(e);
            }
        } else if (seriesID) {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/tv/${seriesID}/videos?api_key=${process.env.REACT_APP_API_KEY2}`)
                const urlKey = response.data.results[0].key;
                const url = `https://www.youtube.com/watch?v=${urlKey}`;
                setTrailer(url);
            } catch (e) {
                console.error(e);
            }
        }
    }
    useEffect(()=>{fetchTMDBvideo()}, [movieID, seriesID]);*/

    return (
        <>
            {responseUNOGS && responseUNOGS.data.results.map((result) => {
                return (
                    <div id="detailsComponent">
            <span id="details">
            <div>Release: {result.year}</div>
            <div>Rating: {result.imdbrated}</div>
            <div>Runtime: {result.imdbruntime}</div>
            <img src={result.lgimg} alt="title-image"/>
            </span>
                        <span id="description">
            <div><b>Description</b></div>
            <div>{result.synopsis}</div>
            </span>
                    </div>
                )
            })}
        </>
        /*<div id="detailsComponent">
          <span id="details">
        <div>Release: {year}</div>
            <div>Rating: {ageRating}</div>
            <div>Runtime: {runtime}</div>
                </span>
            <span id="media">
                <ReactPlayer
                    url={trailer}
                    width={550}
                    height={400}
                    controls
                    light={true}
                />
            </span>
            <span id="description">
            <div><b>Description</b></div>
            <div>{description}</div>
                </span>
        </div>*/
    )
}

export default DetailsPage;