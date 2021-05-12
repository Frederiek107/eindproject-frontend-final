import React, {useContext} from 'react';
import {NavLink, useHistory, useLocation} from 'react-router-dom';
import './NavBar.css'
import Search from '@material-ui/icons/Search'
import NewReleases from '@material-ui/icons/NewReleases'
import Stars from '@material-ui/icons/Stars'
import AccountCircle from '@material-ui/icons/AccountCircle'
import {UserContext} from '../../context/UserContext';
import Searchbar from '../Searchbar/Searchbar';

function NavBar({input, setInput, setSearchValue}) {
    const history = useHistory();
    const {logout} = useContext(UserContext);
    const location = useLocation();

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
                    <section>
                    {location.pathname ==='/home' && <Searchbar
                        input={input}
                        setInput={setInput}
                        setSearchValue={setSearchValue}
                    />}
                    </section>
                </ul>
                <button id='logout-button' onClick={handleClick}>Log out</button>
            </nav>
        </header>
    )
}

export default NavBar;