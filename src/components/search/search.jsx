import React from "react";
import { ManyProductCards } from "../card/card";
import "./search.scss";

function Search() {
  // TODO:
  const searchingItem = null;
  const searchings = null;

  const search = (searchings) => {
    return searchings
      .flat()
      .filter((searchings) =>
        searchings.name.toLowerCase().includes(searchingItem.toLowerCase())
      );
  };


  return (
    <div className="search_wrapper">
      {<ManyProductCards products={search(searchings)} /> || (
        <div className="item_not_found">
          <span>{searchingItem}</span> <p>not found(</p>
        </div>
      )}
    </div>
  );
}

export default Search;