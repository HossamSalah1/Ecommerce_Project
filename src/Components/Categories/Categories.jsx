import React from 'react'
import Style from './Categories.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { increase } from '../../Redux/Counter/CounterSlice'
function Categories() {

    const{counter}=useSelector((state)=>state.counter)
    const dispatch=useDispatch()
    return <>
        <h1>Categories</h1>
        <h2>counter {counter}</h2>
        <button className='btn btn-info' onClick={()=>dispatch(increase())}> Increase</button>
    </>
}

export default Categories
