import React, {useState} from 'react'
import { SliderData } from './SliderData'

const ImageSlider = () => {
const [current, setCurrent ] = useState(0)
//const length = slides.length


    return (
        <div>
            {
            SliderData.map((slide, index) => 
            {return <img src={slide.image} alt="travel image" />;}
            )
            }
        </div>
    );
};

export default ImageSlider;
