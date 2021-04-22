import React, {useContext} from 'react';
import './ProfilePage.css'
import UserContext from "../../components/context/UserContext";

function ProfilePage() {
    const {user} = useContext(UserContext);

    return(
        <></>
    )
}

export default ProfilePage();