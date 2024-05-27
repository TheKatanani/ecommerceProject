import React, { useState } from "react";
import { Search } from "./styles";

function SearchComponent({ page }) {
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    console.log(searchValue, category);
    // Perform API call or other action here
  };

  return (
      <Search page={page}>
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All category</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </Search>
  );
}

export default SearchComponent;
