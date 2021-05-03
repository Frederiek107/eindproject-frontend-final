import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from '../../context/UserContext';
import './ProfilePage.css'
import NavBar from '../../components/NavBar/NavBar';
import {Redirect} from 'react-router-dom';
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu';
import {LocationContext} from '../../context/LocationContextProvider';
import fetchCountry from '../../helpers/fetchCountry';

function ProfilePage({loginStatus, jwtToken}) {
    const {user} = useContext(UserContext);
    const [value, setValue] = useState('');
    const [country, setCountry] = useState('');
    const {location, setLocation} = useContext(LocationContext);
    const [loading, toggleLoading] = useState(true);

    function returnCountry() {
        const country = fetchCountry(location);
        setCountry(country);
        toggleLoading(false);
    }

    useEffect(() => {
        returnCountry()
    }, [location])

    return (
        <>
            {((loginStatus === 'done' || jwtToken !== null) && loading === false) &&
            <>
                <NavBar/>
                <main className='profilepage'>
                    <section className='profile-title'><h2>Profile</h2></section>
                    <section className='profile-content'>
                        <p><b>Username:</b> {user && user.username}</p>
                        <p><b>Email:</b> {user && user.email}</p>
                        <p><b>Selected location: </b>{loading ? <p>loading</p> : country.name}</p>
                        <p><b>Change location: </b></p>
                        <DropdownMenu
                            selectedValue={value}
                            onChangeFunction={(e) => {
                                setValue(e.currentTarget.value)
                            }}
                        />
                        <button id='profile-button' onClick={() => {
                            setLocation(value)
                        }}>Submit
                        </button>
                    </section>
                </main>
            </>
            }
            {(loginStatus === 'pending' && jwtToken === null) && <Redirect to='/'/>}
        </>
    )
}

export default ProfilePage;