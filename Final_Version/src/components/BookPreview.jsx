import react from "react";
import BookIMG from "./BookIMG";
import Details from "./Details.jsx";

function BookPreview(props) {
  return (
    <div className="book">
      <div onClick={props.handleClick} className="book-main">
        <BookIMG img={props.img} />
        <h1 className="book-name"> {props.title} </h1>
      </div>
      <div className="book-details">
        <Details detailInfo={props.author} />
        <Details detailInfo={props.genre} />
      </div>
    </div>
  );
}

export default BookPreview;