import React, {useState, useEffect} from 'react';
import {ReactComponent as ArrowIcon} from '../../assets/up-arrow.svg'
import './ScrollToTop.css';

function ScrollToTop() {
    const [visible, toggleVisible] = useState(false);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(()=>{
        function onScroll() {
            const currentPosition = window.pageYOffset;
            if (currentPosition > 90) {
                toggleVisible(true);
            } else {
                toggleVisible(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return()=>window.removeEventListener('scroll', onScroll)
     }, []);


    return (
        <>
            {visible && (
                <section className='scroll-element' onClick={scrollToTop}>
                <ArrowIcon className='scroll-arrow'/>
                <p>Back to top</p>
                </section>
            )}
        </>
    )
}

export default ScrollToTop;