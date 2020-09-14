import React, { Fragment } from "react";

const StarchFoodButton = ({ onClicked }) => (
  <Fragment>
    <button
      type="button"
      onClick={onClicked}
      className="f3 pa3 btn btn-sucess grow"
    >
      Starchy Food?
    </button>
  </Fragment>
);

export default StarchFoodButton;
