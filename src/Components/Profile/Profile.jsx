import React, { useContext } from 'react'
import Style from './Profile.module.css'
import { UserContext } from '../../Context/userContext'


function Profile() {
    let { userData } = useContext(UserContext);
    
    return <>
        <h1>Name : {userData?.name}</h1>
        <h1>Email : {userData?.email}</h1>

    </>
}

export default Profile
