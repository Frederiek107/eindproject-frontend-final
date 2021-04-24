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
            <div id='page'>
            <h2>Profile</h2>
            <p><b>Username</b> {user && user.username}</p>
            <p><b>Email:</b> {user && user.email}</p>
            </div>
        </>
    )
}

export default ProfilePage;