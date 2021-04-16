import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import './TitleComponent.css'

function TitleComponent({id, query}) {
    const [title, setTitle] = useState ([]);
    const [image, setImage] = useState (null);
    const [imdbrating, setImdbrating] = useState('');
    const [imdbid, setImdbid] = useState('');
    const history = useHistory();

    const searchResult = query.data.results;
    const object = searchResult.find((result)=>{
        return result.nfid===id;
    })

    function removeTitleFaults(title) {
        const newTitle = title.replace("&#39;", "'");
        return newTitle;
    }

    function handleClick() {
        history.push({
            pathname: '/details',
            state: {id: id,
                IMDBid: imdbid},
        })
    }

    useEffect(() => {
        function fetchimdbID() {
            try {
                const imdbID = object.imdbid;
                imdbID && setImdbid(imdbID);
            } catch (e) {
                console.error(e);
            }
        }
        fetchimdbID();
    }, [query])

    useEffect(() => {
        function fetchTitle() {
            try {
                const title = object.title;
                title && setTitle(removeTitleFaults(title));
            } catch (e) {
                console.error(e);
            }
        }

        fetchTitle();
    }, [query])

    useEffect(() => {
        function fetchImage() {
            try {
                const image = object.img;
                image && setImage(image);
            } catch (e) {
                console.error(e);
            }
        }

        fetchImage();
    }, [query])

    useEffect(() => {
        function fetchIMDB() {
            try {
                const IMDB = object.imdbrating;
                IMDB && setImdbrating(IMDB);
            } catch (e) {
                console.error(e);
            }
        }

        fetchIMDB();
    }, [query])

    return (
        <div key={id} id="title-component" onClick={handleClick}>
            <div>{title}</div>
            <img id="image" src={image}/>
            <div>{imdbrating}</div>
        </div>
    );

}

export default TitleComponent;