import React from "react";

function AboutStaff({ title, data }) {
  return (
    <div className="about_staff_wrapper">
      <div className="block_title">
        <h1>{title}</h1>
      </div>
      <div className="staff_filter"></div>

      <div className="staff_content">
        {data.map((data) => (
          <div className="staff_item">
            <div className="staff_imf">
              <img src={data.img} alt={data.img} />
            </div>
            {data.staff_name ? (
              <div className="staff_name_prof">
                <p>{data.staff_name}</p>
                <span>{data.proffes}</span>
              </div>
            ) : (
              <div className="review_descr">
                <p>{data.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutStaff;
