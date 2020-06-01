import React, { Fragment } from "react";

const Button = ({ index, onClicked }) => {
  return (
    <Fragment>
      <button
        type="button"
        onClick={onClicked}
        className="f3 pa3 btn btn-sucess grow"
      >
        No Idea? Click Me!
      </button>
    </Fragment>
  );
};

export default Button;
