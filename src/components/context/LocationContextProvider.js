import React, {createContext, useState} from 'react';

export const LocationContext = createContext(null);

//deze context moet ontvangen worden door: Homepage, NewContentPage, TopRatedPage

function LocationContextProvider({children}) {
    const [location, setLocation] = useState(null);

    const data = {
        location: location,
        setLocation: fetchLocation,
    }

    function fetchLocation() {
    //uit te voeren functie. Er zijn 34 landen: Argentina(id:21), Australia(23), Belgium(26), Brazil(29), Canada(33),Switzerland(34),Germany(39),
    //France(45), United Kingdom(46), Mexico(65), Netherlands(67), Sweden (73), United States(78), Iceland(265), Japan (267), Portugal(268),
    //Italy(269), Spain(270), Czech Republic(307), Greece (327), Hong Kong(331),Hungary(334), Israel (336), India(337), South Korea(348),
    //Lithuania(357),Poland (392), Romania(400), Russia(402), Singapore (408), Slovakia(412), Thailand (425), Turkey (432), South Africa (447)
    }

    return (
        <LocationContext.Provider value={data}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationContextProvider;

