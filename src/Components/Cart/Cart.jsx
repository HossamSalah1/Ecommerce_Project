import React, { useContext, useEffect, useState } from 'react'
import Style from './Cart.module.css'
import { CartContext } from '../../Context/cartContext'


function Cart() {
    let { getLogedProdect } = useContext(CartContext)
    let [getCart, SetGetCart] = useState()

    async function getCartProduct() {
        let { data } = await getLogedProdect();
        SetGetCart(data)
    }
    useEffect(() => {
        getCartProduct();
    }, [])
    return <>
        {getCart ? <div className="w-75 mx-auto py-3 p-3 bg-main-light">
            <h3>Shopping Cart</h3>
            <h6 className=' text-main fw-bolder'> Cart Items : {getCart.numOfCartItems}</h6>
            <h6 className='text-main fw-bolder mb-3'>Total Cart Price : {getCart.data.totalCartPrice}</h6>
            {getCart.data.products.map((product) => <div key={product.product.id} className='row border-bottom py-2 px-2'>

                <div className="col-md-1">
                    <img className='w-100' src={product.product.imageCover} alt="" />
                </div>
                <div className="col-md-11">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h3 className='h6'> {product.product.title.split(' ').slice(0, 3).join(' ')}</h3>
                            <h6 className='text-main'> Price : {product.price} EGP</h6>

                        </div>
                        <div>
                            <button className='btn brdr-main p-1'>+</button>
                            <span className='mx-2'>{product.count}</span>
                            <button className='btn bordr-main p-1'>-</button>

                        </div>

                    </div>
                    <button className='btn p-0'><i className='text-danger font-sm fas fa-trash-can'> </i> Remove</button>
                </div>


            </div>)}

        </div> : ""}
    </>
}

export default Cart
