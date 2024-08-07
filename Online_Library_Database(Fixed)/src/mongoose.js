import react from "react";
import books from "./books";

const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
  rating: Number,
  comment: String,
});
const Review = mongoose.model("Review", reviewsSchema);

const booksSchema = new mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  genre: String,
  publication: String,
  description: String,
  ImgURL: String,
  reviews: [reviewsSchema],
});
const Book = mongoose.model("Book", booksSchema);

export function persistReviews(review) {
  const newReview = new Review([
    {
      rating: review.rating,
      comment: review.comment,
    },
  ]);
  newReview.save();
}

export function persistBooks(book) {
  const newBook = new Book([
    {
      id: book.id,
      title: book.title,
      author: book.author,
      genre: book.genre,
      publication: book.publication,
      description: book.description,
      ImgURL: book.ImgUrl,
      reviews: [reviewsSchema],
    },
  ]);
  newBook.save();
}

export function checkForBooks() {
  console.log("Checking for books");
  Book.find({})
    .then(function (foundItems) {
      console.log("Found Items Size:", foundItems.length);

      if (foundItems.length === 0) {
        books.map(persistBooks);
        console.log("Books Added");
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}


