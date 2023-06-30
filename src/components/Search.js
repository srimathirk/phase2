import React, { useState } from "react";

function Search({ searchValue }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted", search);
    searchValue(search);
  }
  function handleSearch(e) {
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search images by description"
        value={search}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
