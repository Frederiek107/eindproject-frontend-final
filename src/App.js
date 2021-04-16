import React from 'react';
import './App.css';
import Loginpage from '../src/pages/Loginpage/Loginpage'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from '../src/pages/Homepage/Homepage'
import TopMenu from '../src/components/TopMenu/TopMenu'
import NewContentPage from '../src/pages/NewContentPage/NewContentPage'
import TitleDetails from '../src/pages/TitleDetails/TitleDetails'

function App() {

  return (
      <Router>
        <TopMenu />
        <Switch>
          <Route exact path="/" >
            <Loginpage />
          </Route>

          <Route path="/home">
            <Homepage />
          </Route>

          <Route path="/new">
            <NewContentPage />
          </Route>

          <Route path="/details">
            <TitleDetails />
          </Route>

        </Switch>
      </Router>
  );
}

export default App;
