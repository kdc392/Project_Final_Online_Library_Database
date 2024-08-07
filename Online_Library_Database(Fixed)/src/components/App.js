import React, { useState } from "react";
import books from "../books.js";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import SearchBar from "./SearchBar.jsx";
import CreateBook from "./CreateBooks.jsx";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { genres, orders } from "../filters.js";

function App() {
  // const [changedBooks, setChangedBooks] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState(books);
  //console.log("filteredBooks: ", filteredBooks);
  const [genreValue, setGenreValue] = useState(null);
  const [orderValue, setOrderValue] = useState(null);
  //const [isFiltered, setFiltered] = useState(false);
  //const [isOrdered, setOrdered] = useState(false);

  // function handleGenre(event, newValue) {
  //  setChangedBooks(true);
  // setFilteredBooks(() => {
  //   if (genres.includes(newValue)) {
  //     setFiltered(true);
  //     newBooks = books.filter((found) => found.genre === newValue);
  //   } else if (genres.includes(newValue) === false && isOrdered === false) {
  //     setFiltered(false);
  //     newBooks = books.toSorted();
  //   } else if (genres.includes(newValue) === false && isOrdered === true) {
  //     setFiltered(false);
  //   }
  //   return newBooks;
  // });
  //setFilteredBooks(newBooks);
  // setGenreValue(newValue);
  // console.log(genres.includes(newValue));

  // if (genres.includes(newValue)) {
  //   setFiltered(true);
  //   //newBooks = books.filter((found) => found.genre === newValue);
  //   setFilteredBooks(books.filter((b) => b.genre === newValue));
  // } else if (genres.includes(newValue) === false && isOrdered === false) {
  //   setFiltered(false);
  //   //newBooks = books.toSorted();
  //   setFilteredBooks(books);
  // } else if (genres.includes(newValue) === false && isOrdered === true) {
  //   setFiltered(false);
  //   handleOrder(newValue);
  // }
  // function reorder(books, indexes) {
  //   return indexes.map((index) => books[index]);
  // }
  // if (genres.includes(newValue)) {
  //   setFiltered(true);
  //   if (newValue === "Action/Adventure") {
  //     const indexes = [22, 24];
  //     const reordered = reorder(books, indexes);
  //     setFilteredBooks(
  //       books.toSorted(function (books, indexes) {
  //         indexes.map((index) => books[index]);
  //       })
  //     );
  //     console.log(reordered);
  //}

  function handleGenre(event, newValue) {
    setGenreValue(newValue);
    updateFilteredBooks(newValue, orderValue);
  }
  function handleOrder(event, newValue) {
    setOrderValue(newValue);
    updateFilteredBooks(genreValue, newValue);
    //const orderedBooks = sortBooks(filteredBooks, newValue);
    //setFilteredBooks(orderedBooks);
  }
  function updateFilteredBooks(newGenre, newOrder) {
    let newFilteredBooks = books;

    if (newGenre && genres.includes(newGenre)) {
      newFilteredBooks = books.filter((b) => b.genre === newGenre);
    }

    if (newOrder) {
      newFilteredBooks = sortBooks(newFilteredBooks, newOrder);
    }

    setFilteredBooks(newFilteredBooks);
  }

  // function handleOrder(event, newValue) {
  //   setChangedBooks(true);
  //   setOrderValue(newValue);
  //   if (orders.includes(newValue) && isFiltered === false) {
  //     setOrdered(true);
  //     if (newValue === "Alphabetical (Ascending)") {
  //       setFilteredBooks(
  //         books.toSorted((b1, b2) =>
  //           b1.title > b2.title ? 1 : b1.title < b2.title ? -1 : 0
  //         )
  //       );
  //     } else if (newValue === "Alphabetical (Descending)") {
  //       setFilteredBooks(
  //         books.toSorted((b1, b2) =>
  //           b1.title < b2.title ? 1 : b1.title > b2.title ? -1 : 0
  //         )
  //       );
  //     } else if (newValue === "Publication (Newest-Oldest)") {
  //       setFilteredBooks(
  //         books.toSorted((b1, b2) =>
  //           b1.publication < b2.publication
  //             ? 1
  //             : b1.publication > b2.publication
  //             ? -1
  //             : 0
  //         )
  //       );
  //     } else if (newValue === "Publication (Oldest-Newest)") {
  //       setFilteredBooks(
  //         books.toSorted((b1, b2) =>
  //           b1.publication > b2.publication
  //             ? 1
  //             : b1.publication < b2.publication
  //             ? -1
  //             : 0
  //         )
  //       );
  //     } else if (newValue === null) {
  //       setFilteredBooks(books);
  //     }
  //   } else if (orders.includes(newValue) && isFiltered === true) {
  //     setOrdered(true);
  //     if (newValue === "Alphabetical (Ascending)") {
  //       setFilteredBooks(
  //         filteredBooks.toSorted((b1, b2) =>
  //           b1.title > b2.title ? 1 : b1.title < b2.title ? -1 : 0
  //         )
  //       );
  //     } else if (newValue === "Alphabetical (Descending)") {
  //       setFilteredBooks(
  //         filteredBooks.toSorted((b1, b2) =>
  //           b1.title < b2.title ? 1 : b1.title > b2.title ? -1 : 0
  //         )
  //       );
  //     } else if (newValue === "Publication (Newest-Oldest)") {
  //       setFilteredBooks(
  //         filteredBooks.toSorted((b1, b2) =>
  //           b1.publication < b2.publication
  //             ? 1
  //             : b1.publication > b2.publication
  //             ? -1
  //             : 0
  //         )
  //       );
  //     } else if (newValue === "Publication (Oldest-Newest)") {
  //       setFilteredBooks(
  //         filteredBooks.toSorted((b1, b2) =>
  //           b1.publication > b2.publication
  //             ? 1
  //             : b1.publication < b2.publication
  //             ? -1
  //             : 0
  //         )
  //       );
  //     }
  //   } else if (orders.includes(newValue) === false && isFiltered === true) {
  //     setOrdered(false);
  //     setFilteredBooks(
  //       filteredBooks.toSorted((b1, b2) =>
  //         b1.id < b2.id ? 1 : b1.id > b2.id ? -1 : 0
  //       )
  //     );
  //   } else {
  //     setFilteredBooks(books);
  //   }
  // }
  function sortBooks(booksArray, order) {
    switch (order) {
      case "Alphabetical (Ascending)":
        return [...booksArray].toSorted((b1, b2) =>
          b1.title.localeCompare(b2.title)
        );
      case "Alphabetical (Descending)":
        return [...booksArray].toSorted((b1, b2) =>
          b2.title.localeCompare(b1.title)
        );
      case "Publication (Newest-Oldest)":
        return [...booksArray].toSorted(
          (b1, b2) => b2.publication - b1.publication
        );
      case "Publication (Oldest-Newest)":
        return [...booksArray].toSorted(
          (b1, b2) => b1.publication - b2.publication
        );
      default:
        return booksArray;
    }
  }

  function searchResults(newSearch) {
    const searchContent = newSearch.searchContent.toLowerCase();

    const titleSearch = books.filter((book) =>
      book.title.toLowerCase().includes(searchContent)
    );
    const authorSearch = books.filter((book) =>
      book.author.toLowerCase().includes(searchContent)
    );

    if (titleSearch.length != 0 && authorSearch.length === 0) {
      setFilteredBooks(titleSearch);
    } else if (authorSearch.length != 0 && titleSearch.length === 0) {
      setFilteredBooks(authorSearch);
    } else if (titleSearch.length === 0 && authorSearch.length === 0) {
      setFilteredBooks(books);
    }
  }

  // function searchResults(newSearch) {
  //   //console.log("Set Search: ", newSearch.searchContent);

  //   const titleSearch = books.filter((book) =>
  //     book.title.includes(newSearch.searchContent)
  //   );
  //   console.log("titleSearch: ", titleSearch.length != 0);
  //   const authorSearch = books.filter((book) =>
  //     book.author.includes(newSearch.searchContent)
  //   );
  //   console.log("authorSearch: ", authorSearch.length != 0);

  //   if (titleSearch.length != 0 && authorSearch.length === 0) {
  //     setFilteredBooks(titleSearch);
  //   } else if (authorSearch.length != 0 && titleSearch.length === 0) {
  //     setFilteredBooks(authorSearch);
  //   } else if (titleSearch.length === 0 && authorSearch.length === 0) {
  //     setFilteredBooks([]);
  //   }
  // }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <SearchBar onSearch={searchResults} />
        <form className="filters">
          <Autocomplete
            className="genre-filter"
            options={genres}
            renderInput={(params) => <TextField {...params} label="Genre" />}
            value={genreValue}
            onChange={handleGenre}
          />
          <Autocomplete
            className="order-filter"
            options={orders}
            renderInput={(params) => <TextField {...params} label="Order By" />}
            value={orderValue}
            onChange={handleOrder}
          />
        </form>
      </div>
      <div className="books-list">
        {filteredBooks.map((book) => (
          <CreateBook key={book.id} book={book} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;