import React, { useState } from "react";
import { items } from "../../redux/data";
import { ManyProductCards } from "../card/card";
import "./catalog-items.scss";

function CatalogItems() {
  const categories = [
    {
      description: "Все",
    },
    {
      description: "Балык",
    },
    {
      description: "Бекон",
    },
    {
      description: "Вырезка",
    },

    {
      description: "Говядина",
    },
    {
      description: "Голяшка",
    },
    {
      description: "Грудинка",
    },
    {
      description: "Карбонад",
    },
    {
      description: "Корейка",
    },
    {
      description: "Мясные хлеба",
    },
    {
      description: "Пасторма",
    },
    {
      description: "Суджук",
    },
    {
      description: "Шея",
    },
  ];


  const filteredItems = [];

  const [active, setActive] = useState("");
  const [dataCount, setdataCount] = useState(6);
  const [showMore, hideShowMore] = useState(true);

  const filterItems = (key) => {
    const data = items.filter((el) => el.type === key);
    setActive(key);
    if (data.length < 6) {
      hideShowMore(false);
    }
  };

  const seeMorebtn = () => {
    setdataCount(dataCount + 6);
  };
  const data = items.slice(0, dataCount);

  return (
    <div className="catalog_items_page">
      <div className="items_filters">
        <div className="filters">
          {categories.map((filter) => (
            <div
              className={
                active === filter.description
                  ? "filter_item active"
                  : "filter_item"
              }
              onClick={() => filterItems(filter.description)}
              key={filter.description}
            >
              <span>{filter.description}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="sorting_input">
        <select>
          <option value="По умолчанию">По умолчанию</option>
          <option value="По цене">По цене</option>
          <option value="По умолчанию">По алфавиту</option>
        </select>
      </div>
      <div className="items_products">
        <ManyProductCards
          products={
            filteredItems.length >= 1
              ? filteredItems
              : data
          }
        />
      </div>

      <div className={ !showMore || items.length < 6 ? "hide_show_more" : "show_more"}>
        <div className="show_more_button" onClick={seeMorebtn}>
          <p>Показать еще</p>
        </div>
      </div>
    </div>
  );
}

export default CatalogItems;