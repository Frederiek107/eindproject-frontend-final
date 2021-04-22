import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LocationContextProvider, {LocationContext} from "./components/context/LocationContextProvider";
import UserContextProvider from "./components/context/UserContext";

ReactDOM.render(
  <React.StrictMode>
      <UserContextProvider>
      <LocationContextProvider>
    <App />
      </LocationContextProvider>
      </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
