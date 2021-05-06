import React, {useState, useEffect} from 'react';
import {ReactComponent as ArrowIcon} from '../../assets/up-arrow.svg'
import './ScrollToTop.css';

function ScrollToTop() {
    const [visible, toggleVisible] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(()=>{
        function onScroll() {
            const currentPosition = window.pageYOffset;
            if (currentPosition > scrollTop) {
                toggleVisible(true);
            } else {
                toggleVisible(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return()=>window.removeEventListener('scroll', onScroll)
     }, [scrollTop]);


    return (
        <>
            {visible && (
                <ArrowIcon className='scroll-top' onClick={scrollToTop}/>
            )}
        </>
    )
}

export default ScrollToTop;