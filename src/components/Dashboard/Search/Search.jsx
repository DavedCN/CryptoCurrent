import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Search = ({ search, onSearchChange }) => {
  return (
    <div className="search-flex">
      <IoSearch size={16} />
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => onSearchChange(e)}
      />
    </div>
  );
};

export default Search;
