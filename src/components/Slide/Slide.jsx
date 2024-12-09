import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Sdata from './Sdata';
import "./style.css";
const Slide = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <>
    <div className="slide">
    <h2> Single Item</h2>
    <Slider {...settings}>
        {Sdata.map((value)=>{
            return (
                <div className="box" key={value.id}>
                    <div className="img">
                        <img src={value.cover} alt="" />
                    </div>
                    <div className="text">
                        <span>{value.category}</span>
                        <h2>{value.title}</h2>
                        <p>{value.desc}</p>
                    </div>
                </div>
            )
        })}
    </Slider>
    </div>
    </>
  )
}

export default Slide
