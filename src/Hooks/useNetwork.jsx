import React, { useState } from 'react'
import { useEffect } from 'react'

function useNetwork() {

    let [isOnline, setIsOnline] = useState(true)
    function detectNetwork() {
        window.addEventListener('online', function () {
            setIsOnline(true)
        })
        window.addEventListener('offline', function () {
            setIsOnline(false)
        })
    }

    useEffect(() => {
        detectNetwork()
    }, [])
    return <>
    {!isOnline?<div className='network'><i className=' fas fa-wifi'>you are online</i></div>:<div className='network'><i className=' fas fa-wifi'>you are offline</i></div>}
    </>
}

export default useNetwork
