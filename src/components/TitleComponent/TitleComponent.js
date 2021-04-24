import React from 'react';
import {useHistory} from 'react-router-dom';
import './TitleComponent.css'

function TitleComponent({netflixID, imdbID, title, image, imdbRating, vtype}) {
    const history = useHistory();

    function removeTitleFaults(title) {
        const newTitle = title.replace("&#39;", "'");
        return newTitle;
    }

    function handleClick() {
        history.push({
            pathname: `/details:${netflixID}`,
            state: {
                netflixID: netflixID,
                imdbID: imdbID,
                vtype:vtype
            }
        })
    }

    return (
        <div key={netflixID} className='title-component' onClick={handleClick}>
            {removeTitleFaults(title)}
            <img id='image' src={image} alt='netflix-title'/>
            {imdbRating}
        </div>
    );

}

export default TitleComponent;