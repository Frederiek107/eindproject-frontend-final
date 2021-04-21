import React, {useContext} from 'react';
import './App.css';
import Loginpage from '../src/pages/Loginpage/Loginpage'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from '../src/pages/Homepage/Homepage'
import NavBar from './components/NavBar/NavBar'
import NewContentPage from '../src/pages/NewContentPage/NewContentPage'
import TitleDetails from '../src/pages/TitleDetails/TitleDetails'
import TopRatedPage from "./pages/TopRatedPage/TopRatedPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import {useLocation} from "react-router-dom";
import LocationContextProvider, {LocationContext} from "./components/context/LocationContextProvider";

function App() {

    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Loginpage/>
                </Route>

                <Route path="/signup">
                    <SignupPage/>
                </Route>

                <Route path="/home">
                    <Homepage/>
                </Route>

                <Route path="/new">
                    <NewContentPage/>
                </Route>

                <Route path="/toprated">
                    <TopRatedPage/>
                </Route>

                <Route exact path="/details:netflixID">
                    <TitleDetails/>
                </Route>

                <Route path="/profile">
                    <ProfilePage/>
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
