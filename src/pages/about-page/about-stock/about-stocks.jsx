import React, { useState } from "react";
import { stocks_data } from "../../../redux/data";
import "./about-stocks.scss";


function AboutStocks() {
  const [dataCount, setdataCount] = useState(8);

  const seeMorebtn = () => {
    setdataCount(dataCount + 4);
  };

  const data = stocks_data.slice(0, dataCount);

  return (
    <div className="stocks_wrapper">
      <div className="block_title">
        <h1>Акции</h1>
      </div>
      <div className="stocks_content">
        {data.map((data) => (
          <div key={data.img} className="stock_cart">
            <div className="stock_img">
              <img src={data.img} alt={data.img} />
            </div>
            <div className="stock_descriptions">
              <span>{data.date}</span>
              <h4>{data.title}</h4>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="show_more_stocks" onClick={seeMorebtn}>
        <p>Показать еще</p>
      </div>
    </div>
  );
}

export default AboutStocks;
