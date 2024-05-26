import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.scss";
import { NavLink } from "react-router-dom";

const HeaderCarousel = () => {

  return (
    <Carousel
      autoPlay={false}
      emulateTouch={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
    >
      <div className="slider_image">
        <div className="header_content">
          <div className="header_title">
            <h1>Истина в качестве</h1>
          </div>
          <div className="header_descr">
            <p>
              Компания «Реснота» производит более 100 видов продуктов питания:
              колбасные и мясные изделия, хлебная и молочная продукция
            </p>
          </div>
          <NavLink to="/catalogue">
            <div className="header_button">
              <button>Купить</button>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="slider_image">
        <div className="header_content">
          <div className="header_title">
            <h1>Истина в качестве</h1>
          </div>
          <div className="header_descr">
            <p>
              Компания «Реснота» производит более 100 видов продуктов питания:
              колбасные и мясные изделия, хлебная и молочная продукция
            </p>
          </div>
          <NavLink to="/catalogue">
            <div className="header_button">
              <button>Купить</button>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="slider_image">
        <div className="header_content">
          <div className="header_title">
            <h1>Истина в качестве</h1>
          </div>
          <div className="header_descr">
            <p>
              Компания «Реснота» производит более 100 видов продуктов питания:
              колбасные и мясные изделия, хлебная и молочная продукция
            </p>
          </div>
          <NavLink to="/catalogue">
            <div className="header_button">
              <button>Купить</button>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="slider_image">
        <div className="header_content">
          <div className="header_title">
            <h1>Истина в качестве</h1>
          </div>
          <div className="header_descr">
            <p>
              Компания «Реснота» производит более 100 видов продуктов питания:
              колбасные и мясные изделия, хлебная и молочная продукция
            </p>
          </div>
          <NavLink to="/catalogue">
            <div className="header_button">
              <button>Купить</button>
            </div>
          </NavLink>
        </div>
      </div>
    </Carousel>
  );
};

export default HeaderCarousel;