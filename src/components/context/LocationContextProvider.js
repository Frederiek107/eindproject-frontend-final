import React, {createContext, useState} from 'react';

export const LocationContext = createContext(null);

function LocationContextProvider({children}) {
    const [location, setLocation] = useState("21");

    const data = {
        location: location,
        setLocation: setLocation,
    }

    return (
        <LocationContext.Provider value={data}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationContextProvider;

