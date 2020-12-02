import React from 'react'
import { SliderData } from './SliderData'

const ImageSlider = () => {
    return (
        <div>
            {
            SliderData.map((slide, index) => 
            {return <img src={slide.img} alt="travel image" />;}
            )
            }
        </div>
    );
};

export default ImageSlider;
