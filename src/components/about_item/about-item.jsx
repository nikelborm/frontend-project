import React from "react";
import { Navigate, NavLink, useParams } from "react-router-dom";
import { ManyProductCards } from "../card/card";
import ModalBlock from "../modal/modal-block";
import "./about-item.scss";
import { useProductsQuery, useSpecificProductQuery } from '../../hooks/hooks';

const AboutItem = () => {
  const productId = parseInt(useParams().productId, 10);

  const { data: products, isLoading: isProductsLoading } = useProductsQuery();
  const { data: specificProduct, isLoading: isSpecificProductLoading } = useSpecificProductQuery(productId);

  if (Number.isNaN(productId)) return <Navigate to={-1} />;

  const recommendedProducts = products?.slice(0, 4).reverse();

  const saleProducts = products
    ?.filter((el) => el.category.name === "Скидка")
    .slice(0, 4)
    .reverse();

  return (
    <div className="about_item_wrapper">
      <div className="about__menu">
        <div className="content_top_menu">
          <NavLink to="/">
            <div className="content_menu_elem">
              <p>Главная</p>
            </div>
          </NavLink>
          <div className="centre_dot">
            <span>•</span>
          </div>
          <NavLink to="/catalogue">
            <div className="content_menu_elem">
              <p>Каталог</p>
            </div>
          </NavLink>
          <div className="centre_dot">
            <span>•</span>
          </div>
          <NavLink to="/catalogue/meat-bird">
            <div className="content_menu_elem">
              <p>Колбасные и мясные изделия</p>
            </div>
          </NavLink>
          <div className="centre_dot">
            <span>•</span>
          </div>
          <div className="content_menu_elem">
            {/* TODO */}
            <p>{"Колбасы вяленые и сырокопченые" }</p>
          </div>
        </div>
        <div className="about_title">
          {/* TODO */}
          <h1>{"Колбасы вяленые и сырокопченые" }</h1>
        </div>
      </div>
      <div className="about_item_block">
        {specificProduct && <ModalBlock
          currentProductOpenedInModal={specificProduct}
          // closeModal={closeModal}
        />}
      </div>
      <div className="checkout_services">
        <div className="checkout_links">
          <div className="checkout_link first_link">
            <p>Доставка</p>
          </div>
          <div className="checkout_link">
            <p>Оплата</p>
          </div>
          <div className="checkout_link">
            <p>Наши гарантии</p>
          </div>
        </div>
      </div>
      <div className="checkout_description">
        <div className="left_checkout">
          <h4>Самовывоз</h4>
          <p>
            <span>1. Магазин</span> – г. Москва ул. Осенний бульвар д. 5к1 Время
            работы: 8:30 - 22:00
          </p>
          <p>
            <span>2. Производство</span> – г. Москва ул. Крылатская, д. 37 Время
            работы: круглосуточно
          </p>
          <div className="cost_check">
            <p>Бесплатно</p>
          </div>
        </div>
        <div className="right_checkout">
          <h4>Доставка курьером</h4>
          <p>
            Осуществляется на следующий день по Москве в пределах МКАД <br />
            <span>Либо в любой указанный Вами позже день</span>
          </p>

          <div className="cost_check">
            <p>от 200 ₽</p>
          </div>
        </div>
      </div>

      <div className="checkout_recommend">
        <h2>
          Рекомендуем
        </h2>
        <div className="items_block">
          <ManyProductCards products={recommendedProducts} />
        </div>
      </div>

      <div className="checkout_discount">
        <h2>
          Наши акции
        </h2>
        <div className="items_block">
          <ManyProductCards products={saleProducts} />
        </div>
      </div>
    </div>
  );
};

export default AboutItem;