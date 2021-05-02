import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './TitleComponent.css'
import {FaStar} from 'react-icons/fa'
import removeTitleFaults from '../../helpers/removeTitleFaults';
import TitleDetails from '../TitleDetails/TitleDetails';
import useFitText from 'use-fit-text';

function TitleComponent({netflixID, title, image, imdbRating,}) {
    const [isOpen, toggleIsOpen] = useState(false);
    const { fontSize, ref } = useFitText();

    function togglePopup() {
        toggleIsOpen(!isOpen);
    }

    return (
        <>
        <div key={netflixID} className='title-component' onClick={togglePopup}>
            <div id='title' ref={ref} style={{ fontSize, height: 45, width: 180 }}>{removeTitleFaults(title)}</div>
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