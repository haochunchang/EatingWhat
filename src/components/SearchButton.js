import React, { Fragment } from "react";

const SearchButton = ({ id, isDecided, onClicked }) => {
  return isDecided ? (
    <Fragment>
      <button
        id={id}
        type="button"
        className="f3 pa3 btn btn-success grow"
        onClick={onClicked}
      >
        Search Nearby Foods
      </button>
    </Fragment>
  ) : (
    <h2>Not yet decide what to eat? Click buttons to decide!</h2>
  );
};

export default SearchButton;
