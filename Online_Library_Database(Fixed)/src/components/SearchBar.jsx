import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function SearchBar(props) {
  const [isClicked, setClicked] = useState(false);

  const [search, setSearch] = useState({
    searchContent: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setSearch(() => {
      return {
        [name]: value,
      };
    });
  }

  function doSearch(event) {
    props.onSearch(search);
    event.preventDefault();
  }

  function clicked() {
    setClicked(true);
  }

  return (
    <div>
      <form onClick={clicked} className="searchField">
        <input
          label="Search field"
          type="search"
          name="searchContent"
          onClick={clicked}
          onChange={handleChange}
          value={search.searchContent}
          placeholder="Looking for something specific?"
        />
        <Zoom in={isClicked ? true : false}>
          <Fab onClick={doSearch}>
            <SearchIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default SearchBar;