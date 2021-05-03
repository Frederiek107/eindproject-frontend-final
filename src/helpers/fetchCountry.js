import React from 'react';
import content from '../location-data.json';

function fetchCountry(location) {
    const convertedLocation = Number(location);
    const country = content.find((country) => {
        return country.id === convertedLocation;
    });
    return country;
}

export default fetchCountry;