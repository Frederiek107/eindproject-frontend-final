import React, {createContext, useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const UserContext = createContext({});

function UserContextProvider({children}) {
    const history = useHistory();
    const [userState, setUserState] = useState({
        user: null,
        status: "pending",
    });

    const data = {
        ...userState,
        login: loginFunction,
        logout: logoutFunction,
    }

    async function fetchUserData(jwtToken) {
        /*const decoded = jwt_decode(jwtToken);
        const userID = jwtToken.id;*/
        try {
            const response = await axios.get ("https://polar-lake-14365.herokuapp.com/api/user", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwtToken}`,
                }
            })
            setUserState({
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                },
                status: "done",
            });
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if (token !== undefined && userState.user === null) {
            fetchUserData(token);
        } else {
            setUserState({
                user: null,
                status: "done",
            })
        }
    },[])

    async function loginFunction(jwtToken) {
        console.log(jwtToken);
        localStorage.setItem("token", jwtToken);
        fetchUserData(jwtToken);
        history.push("/profile");
    }

    function logoutFunction() {
        //leeghalen van de localstorage
        localStorage.clear();
        //user in de context weer op 'null' zetten
        setUserState({
            user: null,
            status: "pending",
        })
    }

    return (
        <UserContext.Provider value={data}>
            {children}
            {/*{userState.status === "done" && userState.user !== null
            ? children
            : <p> Loading .... </p>}*/}
        </UserContext.Provider>
    )
}

export default UserContextProvider;