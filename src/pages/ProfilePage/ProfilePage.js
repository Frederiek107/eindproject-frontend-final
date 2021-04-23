import React, {useContext} from 'react';
import {UserContext} from "../../components/context/UserContext";
import './ProfilePage.css'
import axios from "axios";

function ProfilePage() {
const {user} = useContext(UserContext);
console.log(user);

    return(
        <>
        <h1>Profielpagina</h1>
        <p><b>Gebruikersnaam:</b> {user && user.username}</p>
        <p><b>Email:</b> {user && user.email}</p>
        </>
    )
}

export default ProfilePage;