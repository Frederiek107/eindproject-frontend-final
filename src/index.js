import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LocationContextProvider from './context/LocationContextProvider';
import UserContextProvider from './context/UserContext';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <Router>
      <UserContextProvider>
      <LocationContextProvider>
    <App />
      </LocationContextProvider>
      </UserContextProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
