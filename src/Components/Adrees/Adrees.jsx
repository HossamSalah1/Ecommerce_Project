import React, { useContext } from 'react'
import Style from './Adrees.module.css'
import { useFormik } from 'formik'
import { CartContext } from '../../Context/cartContext';



function Adrees() {

    let{OnlinePayment,IdCart}=useContext(CartContext)

    async function handleAddressSubmit(valees) {
        let res=await OnlinePayment(IdCart,"http://localhost:3000",valees)
        console.log(res?.data?.session.url);
        window.location.href=res.data.session.url
        
    }
    //4242424242424242
    let formik = useFormik({
        initialValues: {
            details: '',
            phone: '',
            city: ''
        },
        onSubmit: handleAddressSubmit

    })
    return <>
        <h1>Adrees</h1>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="details">Details :</label>
            <input value={formik.values.details} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" className='form-control mb-2' id='details' />
            <label htmlFor="phone">Phone :</label>
            <input value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" className='form-control mb-2' id='phone' />
            <label htmlFor="city">City :</label>
            <input value={formik.values.city} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" className='form-control mb-2' id='city' />
            <button type='submit' className='btn bg-main text-white'>bay Now</button>
        </form>
    </>
}

export default Adrees
