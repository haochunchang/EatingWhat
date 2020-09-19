import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="tc pa2">
      <label>Have something in mind? </label>
      <input
        id="searchbox"
        className="pa3 ba bg-washed-red"
        type="search"
        placeholder="search foods"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
