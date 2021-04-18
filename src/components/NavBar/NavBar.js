import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css'
import HomeIcon from '@material-ui/icons/Home'
import NewReleases from '@material-ui/icons/NewReleases'
import Stars from '@material-ui/icons/Stars'
import AccountCircle from '@material-ui/icons/AccountCircle'

function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home" activeClassName="active-link"><HomeIcon id="icon"/>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/new" activeClassName="active-link"><NewReleases id="icon"/>New Content</NavLink>
                    </li>
                    <li>
                        <NavLink to="/toprated" activeClassName="active-link"><Stars id="icon"/>Top rated</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" activeClassName="active-link"><AccountCircle id="icon"/>Profile</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;