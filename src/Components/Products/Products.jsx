import React from 'react'
import Style from './Products.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { increase, increaseByAmount } from '../../Redux/Counter/CounterSlice';

function Products() {
    let { counter } = useSelector((store) => store.counter)
    let dispatch = useDispatch()
    return <>

        <h1>Products   :    {counter}</h1>

        <button className='btn btn-danger m-2' onClick={()=>dispatch(increase())}> incerse</button>
        <button className='btn btn-info ' onMouseEnter={()=>dispatch(increaseByAmount(1998))}> incersebyamount</button>
    </>
}

export default Products
