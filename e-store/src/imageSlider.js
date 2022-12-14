import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "./global.scss";
import React from "react";

const ImageSlider = ({ images }) => {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 1500,
    };
    return (
        <div className="imgslidercontainer">
            <div className="tag">
                <h1>Image Gallery</h1>
                <br />
            </div>
            <div>
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.id}>
                            <img
                                className="sliderimages"
                                src={item.src}
                                alt={item.alt}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
export default ImageSlider;
