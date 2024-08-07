import react, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
import { Rating } from "@mui/material";

function CreateReviews(props) {
  const [isActive, setActive] = useState(false);
  const [review, setReview] = useState({
    rating: null,
    comment: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setReview((prevReview) => {
      return {
        ...prevReview,
        [name]: value,
      };
    });
    console.log("set review");
  }

  function submitReview(event) {
    props.onAdd(review);
    setReview({
      rating: null,
      comment: "",
    });
    console.log("submit review");
    event.preventDefault();
  }

  function activate() {
    setActive(true);
  }

  return (
    <div className="reviews">
      <h3>Reviews: </h3>
      <form className="create-review">
        {isActive ? (
          <Rating name="rating" onChange={handleChange} value={review.rating} />
        ) : null}
        <textarea
          name="comment"
          onClick={activate}
          onChange={handleChange}
          value={review.comment}
          placeholder="Leave a Review..."
          rows={isActive ? 2 : 1}
        />
        <Zoom in={isActive ? true : false}>
          <Fab onClick={submitReview}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateReviews;