import React, { Fragment } from "react";

const Button = ({ index, onClicked }) => {
  return (
    <Fragment>
      <Button variant="warning" size="lg">
        No Idea? Click Me!
      </Button>{" "}
      <input
        className="grow"
        type="button"
        value="No Idea? Click Me!"
        onClick={onClicked}
      />
    </Fragment>
  );
};

export default Button;
