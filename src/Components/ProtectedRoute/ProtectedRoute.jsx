import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute(props) {

    if (localStorage.getItem('userToken') !== null) {
        console.log("ok");

        return props.children
    }
    else {

        console.log("not ok");

        return <Navigate to={'/login'} />

    }

}

export default ProtectedRoute
