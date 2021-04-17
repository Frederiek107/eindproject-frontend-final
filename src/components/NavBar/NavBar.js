import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css'
import HomeIcon from '@material-ui/icons/Home'

function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home" activeClassName="active-link"><HomeIcon/>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/new" activeClassName="active-link">Recently added</NavLink>
                    </li>
                    <li>
                        <NavLink to="/toprated" activeClassName="active-link">Top rated</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;