import React from "react";

import { ManyProductCards } from "../card/card";
import "./catalogue-filters.scss";
import { useProductsQuery } from '../../hooks/hooks';

function CatalogueFilters({ title }) {
  const { data: products } = useProductsQuery();

  console.log('CatalogueFilters ~ products:', products);

  return (
    <div className="catalog_filters">
      <div>
        <h3>{title}</h3>
      </div>
      <div className="catalog_filtering_items">
        <ManyProductCards
          products={products?.filter(el => el.category.menu_entry_name === title) || []}
        />
      </div>
    </div>
  );
}




export default CatalogueFilters;