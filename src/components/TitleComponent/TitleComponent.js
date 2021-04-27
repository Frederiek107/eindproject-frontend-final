import React from 'react';
import {useHistory} from 'react-router-dom';
import './TitleComponent.css'
import {FaStar} from 'react-icons/fa'
import removeTitleFaults from '../../helpers/removeTitleFaults';

function TitleComponent({netflixID, imdbID, title, image, imdbRating, vtype}) {
    const history = useHistory();

    function handleClick() {
        history.push({
            pathname: `/details:${netflixID}`,
            state: {
                netflixID: netflixID,
                imdbID: imdbID,
                vtype: vtype
            }
        })
    }

    return (
        <div key={netflixID} className='title-component' onClick={handleClick}>
            <div id='title'>{removeTitleFaults(title)}</div>
            <img id='image' src={image} alt='netflix-title'/>
            <div id='imdb'><FaStar id="star"/> {imdbRating !== null && imdbRating !== 'notfound' ? imdbRating : 'N/A'}
            </div>
        </div>
    );

}

export default TitleComponent;