import React from "react";

interface Props {
  children?: JSX.Element;
}

const Scroll = (props: Props) => {
  return (
    <div
      style={{ overflowY: "auto", border: "1 px solid black", height: "500px" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
