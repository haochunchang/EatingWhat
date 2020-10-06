import React from "react";

interface SearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: SearchBoxProps) => {
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
