import React, {useState, useEffect} from 'react';
import './App.css';
import Loginpage from '../src/pages/Loginpage'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from '../src/pages/Homepage'
import TopMenu from '../src/components/TopMenu'
import NewContentPage from '../src/pages/NewContentPage'
import TitleDetails from '../src/pages/TitleDetails'

function App() {

  return (
      <Router>
        <TopMenu />
        <Switch>
          <Route path="/login" >
            <Loginpage />
          </Route>

          <Route exact path="/">
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
