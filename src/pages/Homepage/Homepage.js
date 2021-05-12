import React from 'react';
import './Homepage.css';
import {NavLink} from "react-router-dom";

function Homepage() {
    return (
        <>
        <main className='banner'>
            <section id='banner-container'>
            <section id='banner-title'>
    <h1>Welcome!</h1>
            </section>
            <section id='banner-text'>
        <p><b>Search your favorite</b> movies and series</p>
        <p><b>See all new and top rated</b> content on Netflix</p>
            </section>
            </section>
        </main>
            <main id='login-bar'>
    <NavLink to='/login' id='navigate-login'>Log in</NavLink>
            </main>
        </>
)
}

export default Homepage;