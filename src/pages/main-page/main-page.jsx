import { default as React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderCarousel from "../../components/carousel/carousel";
import MainFilter from "../../components/main-filter-carousel/main-filter";
import Products from "../../components/products-cards/products";
import { items } from "../../redux/data";
import { mainFilter } from "../../redux/search-reducer";
import "./main-page.scss";

function MainPage() {
  const filteredItems = useSelector((state) => state.search.mainFiltered);
  const dispatch = useDispatch();

  const categories = [
    {
      key: "Хиты",
      description: "Хит",
    },
    {
      key: "Скидки",
      description: "Скидка",
    },
    {
      key: "Новинки",
      description: "New",
    },
  ];
  const [active, setActive] = useState("");

  const filterXit = (key) => {
    const data = items.filter((el) => el.category === key);
    dispatch(mainFilter(data));
    setActive(key);
  };

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
              {categories.map((category) => (
                <div
                  className={
                    active === category.description
                      ? "main_filter active_filter"
                      : "main_filter"
                  }
                  onClick={() => filterXit(category.description)}
                  key={category.key}
                >
                  <p> {category.key}</p>
                </div>
              ))}
            </div>

            <div className="filtered_items_carousel">
              {filteredItems.length >= 1 ? (
                <MainFilter items={filteredItems} />
              ) : (
                <MainFilter items={items} />
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default MainPage;
