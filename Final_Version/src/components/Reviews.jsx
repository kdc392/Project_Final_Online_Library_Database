import React from "react";
import { Rating } from "@mui/material";

function Reviews(props) {
  return (
    <div className="review">
      <h1>
        <Rating name="read-only" value={props.rating} readOnly />
      </h1>
      <p>{props.comment}</p>
    </div>
  );
}

export default Reviews;
