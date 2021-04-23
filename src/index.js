import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LocationContextProvider, {LocationContext} from "./components/context/LocationContextProvider";

ReactDOM.render(
  <React.StrictMode>
      <LocationContextProvider>
    <App />
      </LocationContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
