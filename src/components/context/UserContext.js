import React, {createContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import {LocationContext} from "./LocationContextProvider";

//verder in de les vanaf 1:26:00

export const UserContext = createContext({});

function UserContextProvider({children}) {
    const history = useHistory();
    const [userState, setUserState] = useState({
        user: null
    })

    function loginFunction(jwtToken) {
        console.log(jwtToken);
        const decoded = jwt_decode(jwtToken);
        console.log(decoded);
        localStorage.setItem('token', jwtToken);
        setTimeout(()=>{history.push("/home")}, 3000);

    }

    function logoutFunction() {
        console.log("Logout!");
    }

    const data = {
        ...userState,
        login: loginFunction(),
        logout: logoutFunction(),
    }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;