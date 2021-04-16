import React from 'react';
import {NavLink} from "react-router-dom";
import './TopMenu.css'

function TopMenu() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/new" activeClassName="active-link">What's new</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default TopMenu;