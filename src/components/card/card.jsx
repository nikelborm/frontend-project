import React from "react";
import "./card.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as FastLook } from "../../assets/icons/eye_icon.svg";
import { ReactComponent as Favorite } from "../../assets/icons/favorite.svg";
import {
  useStoreWithSetOfProductIdsAddedToCart,
  useStoreWithSetOfProductIdsAddedToFavorites
} from '../../services/state.ts';
import Modal from "../modal/modal";
import ItemType from "./item_type";

export function ManyProductCards(props) {
  const Wrapper = props.Wrapper || React.Fragment;
  const [currentProductOpenedInModal, setCurrentProductOpenedInModal] = useState(null);
  const navigate = useNavigate();
  const { doOppositeStateOfProductIdInCart, isProductIdInCart, } = useStoreWithSetOfProductIdsAddedToCart();
  const { doOppositeStateOfProductIdInFavorites, isProductIdInFavorites } = useStoreWithSetOfProductIdsAddedToFavorites();

  console.log('ManyProductCards ~ localStorage:', localStorage);

  return (
    <>
      <Modal
        currentProductOpenedInModal={currentProductOpenedInModal}
        closeModal={() => setCurrentProductOpenedInModal(null)}
      />
      <Wrapper>
        {props.products?.map((product) => (
          <OneProductCard
            id={product.id}
            key={product.id}
            category={product.category}
            isInCart={isProductIdInCart(product.id)}
            isInFavorites={isProductIdInFavorites(product.id)}
            description={product.description}
            price={product.price}
            name={`${product.id}: ${product.name}`}
            imageSourcePath={`/items_image/${product.image}`}
            changeStateOfProductInCart={doOppositeStateOfProductIdInCart}
            changeStateOfProductInFavorites={doOppositeStateOfProductIdInFavorites}
            changeStateOfProductPreviewModal={(productId) => {
              setCurrentProductOpenedInModal(product);
            }}
            openProductPage={(productId) => {
              navigate(`/about/${productId}`);
            }}
          />
        ))}
      </Wrapper>
    </>
  );
}

/**
 *
 * @param {{
 *   id: number
 *   isInFavorites: boolean
 *   isInCart: boolean
 *   category: { name: string, id: number }
 *   imageSourcePath: string
 *   name: string
 *   description: string
 *   price: number
 *   changeStateOfProductInCart: (productId: number) => void
 *   changeStateOfProductInFavorites: (productId: number) => void
 *   changeStateOfProductPreviewModal: (productId: number) => void
 *   openProductPage: (productId: number) => void
 * }} param0
 * @returns {JSX.Element}
 */
export const OneProductCard = ({
  id,
  isInFavorites,
  isInCart,
  category,
  imageSourcePath,
  name,
  description,
  price,

  changeStateOfProductInCart,
  changeStateOfProductInFavorites,
  changeStateOfProductPreviewModal,
  openProductPage,
}) => {
  return (
    <div className="item_card">
      <div className="item_img_block">
        <ItemType category={category} />
        <img src={imageSourcePath} alt="Not found" />
        <div className="add_to_fav" onClick={() => changeStateOfProductInFavorites(id)}>
          <Favorite
            className={
              isInFavorites
                ? "selectedC"
                : "notSelect "
            }
            width="20px"
            height="19px"
            stroke="#B8C1CA"
          />
        </div>
        <div className="fast_look" onClick={() => changeStateOfProductPreviewModal(id)}>
          <FastLook />
          <p>Быстрый просмотр</p>
        </div>
      </div>
      <div className="item_name" onClick={() => openProductPage(id)}>
        <h4>{"Колбасы вяленые и сырокопченые"}</h4>
      </div>
      <div className="item_description">
        <p>{description}</p>
      </div>
      <div className="item_price">
        <p>{price} ₽</p>
      </div>
      <div className="item_discount">
        <span>
          <strike>660 ₽</strike>
        </span>
        <div className="item_economy">
          <div className="economy_percent">-15%</div>
          <div className="economy_sum">
            <p>Экономия 160 ₽</p>
          </div>
        </div>
      </div>
      <div className="item_buttons">
        <div className="buy_btn" onClick={() => changeStateOfProductInCart(id)}>
          <span>
            {isInCart
              ? "В корзине 🚀"
              : "В корзину!"}
          </span>
        </div>
        <div className="one_click">
          <span>В 1 клик</span>
        </div>
      </div>
    </div>
  );
}