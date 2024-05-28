import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ReactComponent as LeftArrow } from "../../assets/icons/left_arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/right_arrow.svg";
import "./main-filter.scss";

const settings = {
  dots: false,

  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      },
    },
    {
      breakpoint: 1060,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      },
    },
  ],

  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export const ManyProductCardsCarousel = (props) => (
  <Slider {...settings}>
    {props.children}
  </Slider>
)

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="right_arrow_filter" onClick={onClick}>
      <RightArrow />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="left_arrow_filter" onClick={onClick}>
      <LeftArrow />
    </div>
  );
}