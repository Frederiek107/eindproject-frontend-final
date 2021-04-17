import React from 'react';
import './Sidebar.css'

//Genrecodes:
//MOVIES: 262, 798, 875, 920, 1096, 1252, 1613, 1697, 3761(African), 3960(Chinese)
//3979 (critically acclaimed), 4370
//DRAMA: 11,384, 500, 794, 1989, 2596, 2748, 2757, 2893, 3179, 3653, 3682, 3947, 4282, 4425
//
//DOCUMENTARIES: 83,1159,2595,2760, 3215, 3652, 3675, 4006, 4720
//
//COMEDY: 26,869,1009, 1402, 1747, 2030, 2700, 3300, 3519, 3903, 3996, 4058, 4195, 4426, 4906, 4922
//
//ROMANCE: 1255, 3329, 3830
//
//ACTION&ADVENTURE: 899, 947, 1365, 2125, 4344
//
//HORROR: 1694, 4809
//
//THRILLER: 799,972, 1321, 1774, 3269
//
//TV-SERIES: 83, 1372, 4366, 4814
//
//ANIME&ANIMATION: 452, 2653, 2729, 3063, 4698
//
//FAMILY: 561, 783, 2340
//
//WESTERN: 1105
//
//SCI-FI&FANTASY: 1568, 3327, 3916, 4734
//
//MUSIC: 1701, 3278, 4649
//
//CRIME: 1884,

function Sidebar() {
    return (
        <ul className='sidebar'>
            <li> Genres:</li>
            <li> Filter: </li>
        </ul>
    )
}

export default Sidebar;
