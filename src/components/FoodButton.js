import React, { Fragment } from "react";

const FoodButton = ({ onClicked, FoodName }) => (
  <Fragment>
    <button
      type="button"
      onClick={onClicked}
      className="f3 pa3 btn btn-sucess grow"
    >
      {FoodName}?
    </button>
  </Fragment>
);

export default FoodButton;
