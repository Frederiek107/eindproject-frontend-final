import React, {useContext} from 'react';
import {UserContext} from "../../components/context/UserContext";
import './ProfilePage.css'
import axios from "axios";

function ProfilePage() {
const {user} = useContext(UserContext);
console.log(user);

    return(
        <>
        <h1>Profile</h1>
        <p><b>Username</b> {user && user.username}</p>
        <p><b>Email:</b> {user && user.email}</p>
        </>
    )
}

export default ProfilePage;