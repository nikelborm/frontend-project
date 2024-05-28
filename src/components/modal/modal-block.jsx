import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete_icon.svg";
import { ReactComponent as Favorite } from "../../assets/icons/favorite.svg";
import { ReactComponent as LeftArrow } from "../../assets/icons/left_arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/right_arrow.svg";
import ItemType from "../card/item_type";
import "./modal.scss";
import {
  useStoreWithSetOfProductIdsAddedToCart,
  useStoreWithSetOfProductIdsAddedToFavorites,
} from "../../services/state.ts";

function ModalBlock({ currentProductOpenedInModal, closeModal }) {
  const [count, setCount] = useState(1);
  const { doOppositeStateOfProductIdInCart, isProductIdInCart } =
    useStoreWithSetOfProductIdsAddedToCart();
  const { doOppositeStateOfProductIdInFavorites, isProductIdInFavorites } =
    useStoreWithSetOfProductIdsAddedToFavorites();

  const {
    id,
    galleryImage,

    belki,
    fat,
    calory,
    price,
    type,

    storage,
    description,
    composition,
    category
  } = currentProductOpenedInModal;

  const settings = {
    // customPaging: function(i) {
    //   return (
    //     <a>
    //       <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
    //     </a>
    //   );
    // },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="modal_block" data-aos="zoom-in" data-aos-duration="600">
      <div className="close_modal" onClick={() => closeModal()}>
        <DeleteIcon />
      </div>

      <div className="modal_carousel">
        <Slider {...settings}>
          {[
            "../about_item/first.jpg",
            "../about_item/second.jpg",
            "../about_item/third.jpg",
          ].map((img) => (
            <div className="current_img" key={img}>
              <ItemType category={category} />
              <div
                className="add_to_fav"
                onClick={() => doOppositeStateOfProductIdInFavorites(id)}
              >
                <Favorite
                  className={
                    isProductIdInFavorites(id) ? "selectedC" : "notSelect "
                  }
                  width="20px"
                  height="19px"
                  fill="#B8C1CA"
                />
              </div>

              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="modal_descriptions">
        <div className="item_type">
          <h3>Миланская вяленая колбаса</h3>
          <h1>{type}</h1>
        </div>
        <div className="product_description">
          <span>Описание товара</span>
          <p>{description}</p>
        </div>
        <div className="product_description">
          <span>Хранение</span>
          <p>{storage}</p>
        </div>
        <div className="product_description">
          <span>Состав </span>
          <p>{composition}</p>
        </div>

        <div className="product_calory">
          <h4>Пищевая ценность</h4>
          <div className="belki">
            <p>Белок</p>
            <div className="underline_dots"></div>
            <p>{belki}г</p>
          </div>
          <div className="fat">
            <p>Жиры</p>
            <div className="underline_dots"></div>
            <p>{fat}г</p>
          </div>
          <div className="calory">
            <p>Калорийность</p>
            <div className="underline_dots"></div>
            <p>{calory}ккал</p>
          </div>
        </div>
        <div className="modal_cost_block">
          <div className="modal_item_cost">
            <p>{price} ₽ </p>
          </div>
          <div className="modal_item_discount">
            <strike>660 ₽</strike>
            <div className="discount_block">
              <div className="item_economy">
                <div className="economy_percent">-15%</div>
                <div className="economy_sum">
                  <p>Экономия 160 ₽</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal_buy_buttons">
          <div className="modal_counter">
            <div className="uncount" onClick={() => setCount(count - 1)}>
              <p>--</p>
            </div>
            <div className="count_data">
              <p>{count}</p>
            </div>
            <div className="data_count" onClick={() => setCount(count + 1)}>
              <p>+</p>
            </div>
          </div>
          <div
            className="modal_buy"
            onClick={() => doOppositeStateOfProductIdInCart(id)}
          >
            <p>
              {" "}
              {isProductIdInCart(id)
                ? "В корзине 🚀"
                : "В корзину!"}
            </p>
          </div>
          <div className="modal_click">
            <p>В 1 клик</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="right_arrow" onClick={onClick}>
      <RightArrow />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="left_arrow" onClick={onClick}>
      <LeftArrow />
    </div>
  );
}

export default ModalBlock;