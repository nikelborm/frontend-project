import classNames from "classnames";
import React from "react";
import "./card.scss"

/**
 *
 * @param {{ category: { name: string, id: number } }} props
 * @returns {JSX.Element}
 */
function ItemType({ category }) {
  const className= {
    '1': 'categ_green',
    '2': 'categ_blue',
    '3': 'categ_orange'
  }[category.id] || 'whaaaatItShouldNotBePossible'

  if (className === 'whaaaatItShouldNotBePossible')
    throw new Error('wtf Whaaaat it should not be possible')

  return (
    <div className={classNames([ 'item_category', className ])}>
      <p data-category-id={category.id}>{category.name}</p>
    </div>
  );
}

export default ItemType;