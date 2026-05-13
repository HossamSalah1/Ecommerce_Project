import React, { useContext, useEffect, useState } from 'react'
import Style from './FeatureProducts.module.css'
import axios from 'axios'
import { Triangle } from 'react-loader-spinner'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/cartContext'
import toast from 'react-hot-toast';

function FeatureProducts() {
    function getProducts() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    }

    let { isLoading, isError, data, isFetching } = useQuery({
        queryKey: ['featureProducts'],
        queryFn: getProducts
    })

    let { addToCart } = useContext(CartContext)

    async function addProductToCart(id) {
        let res = await addToCart(id)
        if(res.data.status==='success'){
            toast.success('product added successfully')
        }
        else{
            toast.error('Error adding product')
        }
        


    }


    //     let [Products, setProducts] = useState([])
    //     let [isload, setIsLoad] = useState(true)
    //     async function getProducts() {
    //         let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    //         setProducts(data.data)
    //         setIsLoad(false)

    //     }
    //     useEffect(() => {
    //         getProducts()
    //     }, [])
    return <>

        {isLoading ? <div className="d-flex justify-content-center align-items-center vh-100">
            <Triangle
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""

            />
        </div> : <div className="container py-5">
            <div className="row">
                {data?.data?.data?.map((ele) =>
                    <div key={ele.id} className="col-md-2">

                        <div className="product px-2 py-3">
                            <Link to={`/productDetailes/${ele.id}`}>
                                <img src={ele.imageCover} className='w-100' alt="" />
                                <p className='text-main'>category</p>
                                <h3>{ele.title.split(" ").slice(0, 3).join(" ")}</h3>
                                <div className="d-flex justify-content-between">
                                    <p>{ele.price}EGP</p>
                                    <p><i className='fa fa-star rating-color'>
                                        {ele.ratingsAverage}
                                    </i></p>
                                </div>
                            </Link>

                            <button onClick={() => addProductToCart(ele.id)} className="btn bg-main text-white w-100">Add to cart</button>
                        </div>

                    </div>
                )}
            </div>

        </div >}

    </>
}

export default FeatureProducts
