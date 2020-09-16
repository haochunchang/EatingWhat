import React, { Fragment } from "react";

const ProteinFoodButton = ({ onClicked }) => (
  <Fragment>
    <button
      type="button"
      onClick={onClicked}
      className="f3 pa3 btn btn-sucess grow"
    >
      Protein Food?
    </button>
  </Fragment>
);

export default ProteinFoodButton;
