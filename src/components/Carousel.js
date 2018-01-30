import React from "react";
import Slider from 'react-slick';

const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
        { breakpoint: 500, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 1024, settings: { slidesToShow: 5, slidesToScroll: 3 } }
    ]
};

const Carousel = ({ children }) => <Slider {...sliderSettings}>{children}</Slider>;

export default Carousel;
