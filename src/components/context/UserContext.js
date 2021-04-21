import React, {createContext, useContext} from 'react';
import {LocationContext} from "./LocationContextProvider";

export const UserContext = createContext({});

function UserContextProvider() {

    return (
        <UserContext.Provider ({children}) value={data}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;