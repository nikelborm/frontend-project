import React from "react";
import { history_data } from "../../redux/data";
import "./about-page.scss";
import { ReactComponent as Arrow } from "../../assets/icons/Arrow history.svg";

function AboutHistory() {
  return (
    <div className="about_history_wrapper">
      <div className="block_title">
        <h1>История компании</h1>
      </div>
      <div className="block_content">
        {history_data.map((data) => (
          <>
            <div
              key={data.year}
              className="history_item">
              <div className="history_date">
                <p>{data.year}</p>
              </div>
              <div className="history_img">
                <img src={data.img} alt={data.img} />
              </div>
              <div className="history_description">
                <p>{data.description}</p>
              </div>
            </div>
            <div className="history_arrow">
              <Arrow />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default AboutHistory;