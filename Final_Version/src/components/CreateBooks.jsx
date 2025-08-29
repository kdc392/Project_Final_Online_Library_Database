import React, { useState } from "react";
import BookPreview from "./BookPreview.jsx";
import BookIMG from "./BookIMG";
import CreateReviews from "./CreateReviews.jsx";
import Reviews from "./Reviews.jsx";
import { persistReviews } from "../mongoose.js";

function CreateBook({ book }) {
  const [isExtended, setExtended] = useState(false);
  const [reviews, setReviews] = useState([]);

  function addReview(newReview) {
    setReviews((prevReview) => {
      return [...prevReview, newReview];
    });
    persistReviews(newReview);
  }

  function extend() {
    if (isExtended === false) {
      setExtended(true);
    } else {
      setExtended(false);
    }
  }
  return (
    <div className="rendered-books">
      {isExtended ? (
        <div className="extended-view">
          <div onClick={extend} className="extended-main">
            <BookIMG img={book.ImgURL} id="extended-img" />
            <h1 className="extended-name"> {book.title} </h1>
          </div>
          <div className="extended-details">
            <p>
              <b>Author:</b> {book.author}
            </p>
            <p>
              <b>Genre:</b> {book.genre}
            </p>
            <p>
              <b>Publication: </b> {book.publication}
            </p>
            <p>
              <b>Description: </b> {book.description}
            </p>
            <CreateReviews onAdd={addReview} />
            <div className="past-reviews">
              {reviews.map((bookItem, index) => {
                return (
                  <Reviews
                    key={index}
                    id={index}
                    rating={bookItem.rating}
                    comment={bookItem.comment}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <BookPreview
          handleClick={extend}
          key={book.id}
          img={book.ImgURL}
          title={book.title}
          author={book.author}
          genre={book.genre}
        />
      )}
    </div>
  );
}

export default CreateBook;