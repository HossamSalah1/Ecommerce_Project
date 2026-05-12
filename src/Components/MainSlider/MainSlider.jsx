import React from 'react'
import slider1 from '../../Assets/images/slider-image-1.jpeg'
import slider2 from '../../Assets/images/slider-image-2.jpeg'
import slider3 from '../../Assets/images/slider-image-3.jpeg'
import slider4 from '../../Assets/images/grocery-banner-2.jpeg'
import slider5 from '../../Assets/images/grocery-banner.png'
import Slider from "react-slick";


function MainSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
    return <> 
        <div className="row py-3 gx-0">
            <div className="col-md-9">
                <Slider {...settings}>
                    <img src={slider1} height={400} className='w-100' alt="" />
                    <img src={slider2} height={400}  className='w-100' alt="" />
                    <img src={slider3} height={400}  className='w-100' alt="" />
                </Slider>
            </div>
            <div className="col-md-3">
                <img src={slider4} height={200} className='w-100' alt="" />
                <img src={slider5}height={200}  className='w-100' alt="" />

            </div>
        </div>

    </>
}

export default MainSlider
