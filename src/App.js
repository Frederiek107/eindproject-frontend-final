import React from 'react';
import './App.css';
import Loginpage from '../src/pages/Loginpage/Loginpage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from '../src/pages/Homepage/Homepage'
import NewContentPage from '../src/pages/NewContentPage/NewContentPage'
import TitleDetails from '../src/pages/TitleDetails/TitleDetails'
import TopRatedPage from './pages/TopRatedPage/TopRatedPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {

    return (
        <Router>

            <Switch>

                <Route exact path='/'>
                    <Loginpage/>
                </Route>

                <Route path='/signup'>
                    <SignupPage/>
                </Route>

                <Route path='/home'>
                    <Homepage/>
                </Route>

                <Route path='/new'>
                    <NewContentPage/>
                </Route>

                <Route path='/toprated'>
                    <TopRatedPage/>
                </Route>

                <Route exact path='/details:netflixID'>
                    <TitleDetails/>
                </Route>

                <Route path='/profile'>
                    <ProfilePage/>
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
