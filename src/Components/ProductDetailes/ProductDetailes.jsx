import React, { useEffect } from 'react'
import Style from './ProductDetailes.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Helmet } from "react-helmet";
import Slider from "react-slick";



function ProductDetailes() {
    let params = useParams()
    console.log(params.id);

    function getSpasificProduct(id) {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    }

    let { isLoading, isError, data, isFetching } = useQuery({
        queryKey: 'productDetails',
        queryFn: () => getSpasificProduct(params.id)
    })

    console.log(data);
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,



    };


    // async function getProductDetails(id) {

    //     let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    //             console.log("aaaaaaaaaaaaa");

    //     console.log(data);


    // }
    // useEffect(()=>{
    //     getProductDetails(params.id)

    // },[])
    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{data?.data.data.title}</title>
        </Helmet>

        <div className="row py-2 align-items-center">
            <div className="col-md-4">
                <Slider {...settings}>
                    {data?.data.data.images.map((img) => <img src={img} className='w-100' alt={data?.data.data.title} />)}

                </Slider>
            </div>
            <div className="col-md-8">
                <p className='text-main'>category</p>
                <h3>{data?.data?.data?.title.split(" ").slice(0, 3).join(" ")}</h3>
                <p>{data?.data?.data?.description}</p>
                <div className="d-flex justify-content-between">
                    <p>{data?.data?.data?.price}EGP</p>
                    <p><i className='fa fa-star rating-color'>
                        {data?.data?.data?.ratingsAverage}
                    </i></p>
                </div>
                <button className="btn bg-main text-white w-100">Add to cart</button>
            </div>
        </div>
    </>
}

export default ProductDetailes
