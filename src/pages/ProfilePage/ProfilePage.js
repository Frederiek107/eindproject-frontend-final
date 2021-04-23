import React, {useContext} from 'react';
import {UserContext} from "../../components/context/UserContext";
import './ProfilePage.css'

function ProfilePage() {
const {user} = useContext(UserContext);
console.log(user);

    return(
        <></>
    )
}

export default ProfilePage;