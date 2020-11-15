import React, { Fragment } from "react";

const SearchButton = ({ isDecided }) => {
  return isDecided ? (
    <Fragment>
      <button
        type="button"
        // onClick={onClicked}
        className="f3 pa3 btn btn-success grow"
      >
        Search Nearby Foods
      </button>
    </Fragment>
  ) : (
    <h2>Not yet decide what to eat? Click buttons to decide!</h2>
  );
};

export default SearchButton;
