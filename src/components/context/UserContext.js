import React, {createContext, useState} from 'react';
import {useHistory} from 'react-router-dom'

export const UserContext = createContext({});

function UserContextProvider({children}) {
    const history = useHistory();
    const [userState, setUserState] = useState({
        user: null,
    });

    function loginFunction(jwtToken) {
        console.log(jwtToken);
    }

    function logoutFunction() {
        console.log("log out");
    }

    const data = {
        ...userState,
        login: loginFunction,
        logout: logoutFunction,
    }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;