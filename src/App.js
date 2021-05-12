import React, {useContext} from 'react';
import './App.css';
import Loginpage from '../src/pages/Loginpage/Loginpage'
import Homepage from './pages/Homepage/Homepage';
import Searchpage from './pages/Searchpage/Searchpage'
import NewContentPage from '../src/pages/NewContentPage/NewContentPage'
import TitleDetails from './components/TitleDetails/TitleDetails'
import TopRatedPage from './pages/TopRatedPage/TopRatedPage';
import Profilepage from './pages/Profilepage/Profilepage';
import SignupPage from './pages/SignupPage/SignupPage';
import {UserContext} from './context/UserContext';
import {Switch, Route} from 'react-router-dom';


function App() {
    const {status} = useContext(UserContext);
    const jwtToken = localStorage.getItem('token');

    return (
        <Switch>

            <Route exact path='/'>
                <Homepage/>
            </Route>

            <Route exact path='/login'>
                <Loginpage/>
            </Route>

            <Route path='/signup'>
                <SignupPage/>
            </Route>

            <Route exact path='/home'>
                <Searchpage
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
                <Profilepage
                    loginStatus={status}
                    jwtToken={jwtToken}
                />
            </Route>

        </Switch>
    );
}

export default App;
