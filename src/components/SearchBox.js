import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="tc pa2">
      <label>
        Have something in mind?
        <input
          className="pa3 ba bg-washed-red"
          type="search"
          placeholder="search foods"
          onChange={searchChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
