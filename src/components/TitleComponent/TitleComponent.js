import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './TitleComponent.css'
import {FaStar} from 'react-icons/fa'
import removeTitleFaults from '../../helpers/removeTitleFaults';
import TitleDetails from '../TitleDetails/TitleDetails';

function TitleComponent({netflixID, imdbID, title, image, imdbRating, vtype}) {
    const history = useHistory();
    const [isOpen, toggleIsOpen] = useState(false);

    function togglePopup() {
        toggleIsOpen(!isOpen);
    }

    return (
        <>
        <div key={netflixID} className='title-component' onClick={togglePopup}>
            <div id='title'>{removeTitleFaults(title)}</div>
            <img id='image' src={image} alt='netflix-title'/>
            <div id='imdb'><FaStar id="star"/> {imdbRating !== null && imdbRating !== 'notfound' ? imdbRating : 'N/A'}
            </div>
        </div>
            {isOpen && <TitleDetails
                netflixID={netflixID}
                closePopup={togglePopup}
            />}
        </>
    );

}

export default TitleComponent;