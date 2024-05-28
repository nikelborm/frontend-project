import React from "react";

import { useNavigate } from "react-router-dom";
import "./selected-items.scss";
import { useProductsQuery } from '../../hooks/hooks';
import { useStoreWithSetOfProductIdsAddedToCart, useStoreWithSetOfProductIdsAddedToFavorites } from '../../services/state.ts';

function FavoriteItems() {

  const products = useProductsQuery()?.data || [];
  const { isProductIdInFavorites, doOppositeStateOfProductIdInFavorites } = useStoreWithSetOfProductIdsAddedToFavorites();
  const { isProductIdInCart, removeProductIdFromCart } = useStoreWithSetOfProductIdsAddedToCart();
  const boughtProducts = products.filter(product => isProductIdInCart(product.id)) ;

  const navigate = useNavigate();

  return (
    <div className="main_selected_block">
      <div className="content_block_title">
        <h1>Корзина</h1>
      </div>
      <div className="selected_wrapper">
        {boughtProducts.length ? (
          boughtProducts.map(({
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
                  <div
                    className="s_item_name"
                    onClick={() => {
                      navigate(`/about/${id}`);
                    }}
                  >
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
                  onClick={() => doOppositeStateOfProductIdInFavorites(id)}
                >
                  {isProductIdInFavorites(id)
                    ? "Избран ⭐"
                    : "Избрать!"}

                </div>
                <div
                  className="att_to_cart_item"
                  onClick={() => removeProductIdFromCart(id)}
                >
                  <p>Удалить</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="null_message">
            <p>В корзине товары отсутствуют 🥺</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoriteItems;