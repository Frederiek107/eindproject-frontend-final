import React, {useContext} from 'react';
import './App.css';
import Loginpage from '../src/pages/Loginpage/Loginpage'
import {Switch, Route} from 'react-router-dom';
import Homepage from '../src/pages/Homepage/Homepage'
import NewContentPage from '../src/pages/NewContentPage/NewContentPage'
import TitleDetails from '../src/pages/TitleDetails/TitleDetails'
import TopRatedPage from './pages/TopRatedPage/TopRatedPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SignupPage from './pages/SignupPage/SignupPage';
import UserContextProvider, {UserContext} from './context/UserContext';

//inbouwen dat pagina's niet te bereiken zijn indien niet ingelogd
//in de context houden we bij of iemand is ingelogd
// op deze pagina voeg je aan het component deze context als value toe
//op de pagina's zelf voeg je conditionele rendering toe

function App() {
    const {status} = useContext(UserContext);
    console.log(status);

    return (

        <Switch>

            <Route exact path='/'>
                <Loginpage/>
            </Route>

            <Route path='/signup'>
                <SignupPage/>
            </Route>

            <Route exact path='/home'>
                <Homepage
                    loginStatus={status}
                />
            </Route>

            <Route path='/new'>
                <NewContentPage
                    loginStatus={status}
                />
            </Route>

            <Route path='/toprated'>
                <TopRatedPage
                    loginStatus={status}

                />
            </Route>

            <Route exact path='/details:netflixID'>
                <TitleDetails/>
            </Route>

            <Route path='/profile'>
                <ProfilePage
                    loginStatus={status}
                />
            </Route>

        </Switch>
    );
}

export default App;
