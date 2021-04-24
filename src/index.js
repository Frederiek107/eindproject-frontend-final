import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LocationContextProvider, {LocationContext} from "./context/LocationContextProvider";
import UserContextProvider from "./context/UserContext";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <UserContextProvider>
      <LocationContextProvider>
          <BrowserRouter>
    <App />
          </BrowserRouter>
      </LocationContextProvider>
      </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
