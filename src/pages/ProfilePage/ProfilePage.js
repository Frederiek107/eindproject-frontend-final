import React, {useContext} from 'react';
import {UserContext} from '../../context/UserContext';
import './ProfilePage.css'
import NavBar from '../../components/NavBar/NavBar';

function ProfilePage() {
    const {user} = useContext(UserContext);
    console.log(user);

    return (
        <>
            <NavBar/>
            <h1>Profile</h1>
            <p><b>Username</b> {user && user.username}</p>
            <p><b>Email:</b> {user && user.email}</p>
        </>
    )
}

export default ProfilePage;