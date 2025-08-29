import React from "react";

function Details(props) {
  return (
    <div className="detail-info">
      <p className="details">
        {props.detailInfo}
      </p>
    </div>
  );
}

export default Details;