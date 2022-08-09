import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "./images";

import Slider from "react-slick";
import "./global.scss";
import React from "react";

const ImageSlider = ({ images }) => {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className="imgslidercontainer">
            <div className="tag">
                <h1>Image Gallery</h1>
            </div>
            <div className="imgslider">
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.id}>
                            <img class="sliderimages" src={item.src} alt={item.alt} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
export default ImageSlider;