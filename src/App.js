import React, {useContext} from 'react';
import './App.css';
import Loginpage from '../src/pages/Loginpage/Loginpage'
import {Switch, Route} from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage'
import NewContentPage from '../src/pages/NewContentPage/NewContentPage'
import TitleDetails from './components/TitleDetails/TitleDetails'
import TopRatedPage from './pages/TopRatedPage/TopRatedPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SignupPage from './pages/SignupPage/SignupPage';
import {UserContext} from './context/UserContext';


function App() {
    const {status} = useContext(UserContext);
    const jwtToken = localStorage.getItem('token');

    return (
        <Switch>

            <Route exact path='/'>
                <Loginpage/>
            </Route>

            <Route path='/signup'>
                <SignupPage/>
            </Route>

            <Route exact path='/home'>
                <SearchPage
                    loginStatus={status}
                    jwtToken={jwtToken}
                />
            </Route>

            <Route path='/new'>
                <NewContentPage
                    loginStatus={status}
                    jwtToken={jwtToken}
                />
            </Route>

            <Route path='/toprated'>
                <TopRatedPage
                    loginStatus={status}
                    jwtToken={jwtToken}
                />
            </Route>

            <Route exact path='/details:netflixID'>
                <TitleDetails/>
            </Route>

            <Route path='/profile'>
                <ProfilePage
                    loginStatus={status}
                    jwtToken={jwtToken}
                />
            </Route>

        </Switch>
    );
}

export default App;
