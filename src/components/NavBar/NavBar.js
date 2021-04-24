import React, {useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import './NavBar.css'
import Search from '@material-ui/icons/Search'
import NewReleases from '@material-ui/icons/NewReleases'
import Stars from '@material-ui/icons/Stars'
import AccountCircle from '@material-ui/icons/AccountCircle'
import {UserContext} from '../../context/UserContext';

function NavBar() {
    const history = useHistory();
    const {logout} = useContext(UserContext);

    function handleClick() {
        logout();
        history.push('/');
    }

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/profile' activeClassName='active-link'><AccountCircle id='icon'/>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to='/home' activeClassName='active-link'><Search id='icon'/>Search</NavLink>
                    </li>
                    <li>
                        <NavLink to='/new' activeClassName='active-link'><NewReleases id='icon'/>New Content</NavLink>
                    </li>
                    <li>
                        <NavLink to='/toprated' activeClassName='active-link'><Stars id='icon'/>Top rated</NavLink>
                    </li>
                    <button onClick={handleClick}>Logout</button>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;