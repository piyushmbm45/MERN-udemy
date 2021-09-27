import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const dummy_places = [
    {
        id : "p1",
        title : "Taj Mahal",
        imageUrl : "https://cdn.pixabay.com/photo/2019/11/07/11/27/tajmahal-4608641_960_720.jpg",
        description : "17th-century, Mughal-style, marble mausoleum with minarets, a mosque & famously symmetrical gardens.",
        address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
        creator : "u1",
        location: {
            lat: 27.1751496,
            lng: 78.0399535
        }
    },
    {
        id : "p2",
        title : "Taj Mahal",
        imageUrl : "https://cdn.pixabay.com/photo/2019/11/07/11/27/tajmahal-4608641_960_720.jpg",
        description : "17th-century, Mughal-style, marble mausoleum with minarets, a mosque & famously symmetrical gardens.",
        address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
        creator : "u2",
        location: {
            lat: 27.1751496,
            lng: 78.0399535
        }
    }
]

function UserPlaces(){
    const userId = useParams().userId;
    console.log(userId);
    const loadedPlaces = dummy_places.filter((place)=> place.creator === userId)
    return <PlaceList items={loadedPlaces}/>
}


export default UserPlaces;