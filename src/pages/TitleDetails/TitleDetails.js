import React, {useEffect, useState} from 'react';
import axios from "axios";
import ReactPlayer from "react-player";
import {useLocation} from 'react-router-dom'
import './TitleDetails.css'

function DetailsPage() {
    const [id, setId] = useState('');
    const [imdbid, setImdbid] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [ageRating, setAgeRating] = useState('');
    const [runtime, setRuntime] = useState('');
    const [image, setImage] = useState('');
    const [trailer,setTrailer] = useState('');
    const [title, setTitles] = useState('');
    const [movieID, setMovieID] = useState('');
    const [seriesID, setSeriesID] = useState('');
    const location = useLocation();
    const apiKey=process.env.REACT_APP_API_KEY;
    const apiKey2=process.env.REACT_APP_API_KEY2;


    async function fetchMovieID() {
        setId(location.state.id);
        setImdbid(location.state.IMDBid);
        const response = imdbid&& await axios.get(`https://api.themoviedb.org/3/find/${imdbid}?api_key=${apiKey}&language=en-US&external_source=imdb_id`);
        /*const seriesid=response.data.tv_results.map((series)=>{
            return series.id;
        })*/
        /*const seriesID=seriesid[0];*/
        /*setSeriesID(seriesID);*/
        console.log(response);
        const movieid= response.data.movie_results.map((movie)=>{
            return movie.id;
        })
        const movieID=movieid[0];
        setMovieID(movieID);
        console.log(movieID);
    }
    useEffect(()=>{fetchMovieID()},[]);

    async function fetchTMDBvideo() {
        const result = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${apiKey2}&language=en-US`);
        console.log(result);
        const urlKey = result.data.results[0].key;
        const url= `https://www.youtube.com/watch?v=${urlKey}`;
        console.log(url);
        setTrailer(url);
    }
    useEffect(()=>{if (movieID) {fetchTMDBvideo()}},[movieID])

    /*async function fetchDetails() {
        try {
             const response = await axios.get('https://unogsng.p.rapidapi.com/title',
                {
                    headers: {
                        'x-rapidapi-key': ${apiKey}
                        'x-rapidapi-host': 'unogsng.p.rapidapi.com',
                    },
                    params: {
                        netflixid: {id} //{netflixid}
                    }
                });
            console.log(response);
            const year = response&& response.data.results.map((result)=>{
                return result.year;
            });
            console.log(year);
            setYear(year);
            const description = response.data.results.map((result)=> {
                return result.synopsis;
            })
            setDescription(description);
            const ageRating = response.data.results.map((result)=> {
                return result.imdbrated;
            })
            setAgeRating(ageRating);
            const runtime = response.data.results.map((result)=> {
                return result.imdbruntime;
            })
            setRuntime(runtime);
            const image = response.data.results.map((result)=> {
                return result.lgimg;
            })
            image && setImage(image);
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(()=>{if(id) {fetchDetails()}},[]);*/

    return (
        <div id="detailsComponent">
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
        </div>
    )
}

export default DetailsPage;