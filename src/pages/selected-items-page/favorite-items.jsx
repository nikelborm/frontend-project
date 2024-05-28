import React from "react";

import { useNavigate } from "react-router-dom";
import "./selected-items.scss";
import { useStoreWithSetOfProductIdsAddedToFavorites, useStoreWithSetOfProductIdsAddedToCart } from '../../services/state.ts';
import { useProductsQuery } from '../../hooks/hooks';

function FavoriteItems() {
  const products = useProductsQuery()?.data || [];
  const { isProductIdInFavorites, removeProductIdFromFavorites } = useStoreWithSetOfProductIdsAddedToFavorites();
  const { isProductIdInCart, doOppositeStateOfProductIdInCart } = useStoreWithSetOfProductIdsAddedToCart();
  const favorites = products.filter(product => isProductIdInFavorites(product.id)) ;

  const navigate = useNavigate();

  return (
    <div className="main_selected_block">
      <div className="content_block_title">
        <h1>Избранные товары</h1>
      </div>
      <div className="selected_wrapper">
        {favorites.length ? (
          favorites.map(({
            id,
            image,
            item_name,
            name,
            description,
            price,
          }) => (
            <div className="selected_item" key={id}>
              <div className="items_inform">
                <div className="s_item_img">
                  <img src={`/items_image/${image}`} alt={image} />
                </div>
                <div className="s_item_descriptions">
                  <div className="s_item_cat_name">
                    <p>{item_name}</p>
                  </div>
                  <div className="s_item_name" onClick={() => {
                    navigate(`/about/${id}`);
                  }}>
                    <h4>{name}</h4>
                  </div>
                  <div className="s_about">
                    <p>{description}</p>
                  </div>
                  <div className="s_cost">
                    <p>{price} ₽</p>
                  </div>
                </div>
              </div>

              <div className="s_buttons">
                <div
                  className="remove_item"
                  onClick={() => removeProductIdFromFavorites(id)}
                >
                  <p>Удалить</p>
                </div>
                <div
                  className="att_to_cart_item"
                  onClick={() => doOppositeStateOfProductIdInCart(id)}
                >
                  {isProductIdInCart(id)
                    ? "В корзине 🚀"
                    : "В корзину!"}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="null_message" >
            <p>Избранные товары отсутствуют 🥺</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoriteItems;