import React from 'react'
import Style from './CatogerySlider.module.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function CatogerySlider() {

    function getCatogerySlider() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    }

    let { data } = useQuery({
        queryKey: 'CategorySlider',
        queryFn: getCatogerySlider
    })
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"



    };

    return <>
        {data?.data.data ? <div className="py-3"><Slider {...settings}>

            {data?.data.data.map((cat) =>
                <img key={cat._id} src={cat.image} height={200} className='w-100' alt="catSlide" />
            )}

        </Slider></div> : ""}
    </>
}

export default CatogerySlider
