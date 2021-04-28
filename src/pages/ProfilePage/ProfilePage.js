import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from '../../context/UserContext';
import './ProfilePage.css'
import NavBar from '../../components/NavBar/NavBar';
import {Redirect} from 'react-router-dom';
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu';
import {LocationContext} from '../../context/LocationContextProvider';
import content from '../../location-data.json'

function ProfilePage({loginStatus, jwtToken}) {
    const {user} = useContext(UserContext);
    const [value, setValue] = useState('');
    const [country, setCountry] = useState({});
    const {location, setLocation} = useContext(LocationContext);

    useEffect(() => {
        if (location !== null) {
            const convertedLocation = Number(location);
            const country = content.find((country) => {
                return country.id === convertedLocation;
            });
            setCountry(country);
        }
    }, [location])

    return (
        <>
            {(loginStatus === 'done' || jwtToken !== null) &&
            <>
                <NavBar/>
                <div className='profilepage'>
                    <div className='profile-title'><h2>Profile</h2></div>
                    <div className='profile-content'>
                        <p><b>Username:</b> {user && user.username}</p>
                        <p><b>Email:</b> {user && user.email}</p>
                        <p><b>Selected location: </b>{country.name}</p>
                        <p><b>Change location: </b></p>
                        <DropdownMenu
                            selectedValue={value}
                            onChangeFunction={(e) => {
                                setValue(e.currentTarget.value)
                            }}
                        />
                        <button onClick={() => {
                            setLocation(value)
                        }}>Submit
                        </button>
                    </div>
                </div>
            </>
            }
            {(loginStatus === 'pending' && jwtToken === null) && <Redirect to='/'/>}
        </>
    )
}

export default ProfilePage;