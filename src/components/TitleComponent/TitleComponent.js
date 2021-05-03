import React, {useState} from 'react';
import './TitleComponent.css'
import {FaStar} from 'react-icons/fa'
import removeTitleFaults from '../../helpers/removeTitleFaults';
import TitleDetails from '../TitleDetails/TitleDetails';
import useFitText from 'use-fit-text';

function TitleComponent({netflixID, title, image, imdbRating,}) {
    const [isOpen, toggleIsOpen] = useState(false);
    const {fontSize, ref} = useFitText();

    function togglePopup() {
        toggleIsOpen(!isOpen);
    }

    return (
        <>
            <main key={netflixID} className='title-component' onClick={togglePopup}>
                <section id='title' ref={ref} style={{fontSize, height: 45, width: 180}}>{removeTitleFaults(title)}</section>
                <img id='image' src={image} alt='netflix-title'/>
                <section id='imdb'><FaStar
                    id="star"/> {imdbRating !== null && imdbRating !== 'notfound' ? imdbRating : 'N/A'}
                </section>
            </main>
            {isOpen && <TitleDetails
                netflixID={netflixID}
                closePopup={togglePopup}
            />}
        </>
    );

}

export default TitleComponent;