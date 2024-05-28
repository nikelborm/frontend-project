import { default as React, useState } from "react";
import HeaderCarousel from "../../components/carousel/carousel";
import { ManyProductCardsCarousel } from "../../components/main-filter-carousel/main-filter-carousel";
import Products from "../../components/products-cards/products";
import "./main-page.scss";
import { useCategoriesQuery, useProductsQuery } from '../../hooks/hooks';
import { ManyProductCards } from '../../components/card/card';

function MainPage() {
  const [currentMenuEntryName, setCurrentMenuEntryName] = useState("ВСЕ");

  const { data: products, isLoading: isProductsLoading } = useProductsQuery();
  const { data: categories, isLoading: isCategoriesLoading } = useCategoriesQuery();

  const filteredProducts = (products || [])
    .filter((product) => product.category.menu_entry_name === currentMenuEntryName);

  return (
    <div className="main_page_wrapper">
      <header>
        <div className="header_wrapper">
          <div className="main_carousel">
            <HeaderCarousel />
          </div>
          <Products />

          <div className="main_filter_items">
            <div className="main_filters">
              <CategoryMenuItem
                isActive={currentMenuEntryName === 'ВСЕ'}
                name='ВСЕ'
                setCurrentMenuEntryName={setCurrentMenuEntryName}
              />
              {isCategoriesLoading
                ? 'loading other entries...'
                : categories?.map((category) => (
                  <CategoryMenuItem
                    key={category.id}
                    isActive={category.menu_entry_name === currentMenuEntryName}
                    name={category.menu_entry_name}
                    setCurrentMenuEntryName={setCurrentMenuEntryName}
                  />
                ))
              }
            </div>
            {isProductsLoading
              ? 'Products is loading...'
              : <div className="filtered_items_carousel">
                <ManyProductCards
                  Wrapper={ManyProductCardsCarousel}
                  products={
                    currentMenuEntryName === 'ВСЕ'
                      ? products
                      : filteredProducts
                  }
                />
              </div>
            }
          </div>
        </div>
      </header>
    </div>
  );
}

/**
 *
 * @param {{
 *   isActive: boolean,
 *   setCurrentMenuEntryName: (name: string) => void
 *   name: string
 * }} props
 * @returns
 */
const CategoryMenuItem = (props) => {
  return <div
    className={
      props.isActive
      // category.menu_entry_name === currentMenuEntryName
        ? "main_filter active_filter"
        : "main_filter"
    }
    onClick={() => props.setCurrentMenuEntryName(props.name)}
  >
    <p> {props.name}</p>
  </div>
};

export default MainPage;