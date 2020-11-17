import React, { Fragment } from "react";

const FoodButton = ({ id, onClicked, FoodName }) => (
  <Fragment>
    <button
      id={id}
      type="button"
      onClick={onClicked}
      className="f3 pa3 btn btn-sucess grow"
    >
      {`${FoodName}?`}
    </button>
  </Fragment>
);

export default FoodButton;
