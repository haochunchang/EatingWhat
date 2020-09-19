import React from "react";

const Card = (props) => {
  const { url, name } = props;
  return (
    <div className="tc dib br5 pa3 ma3 grow bw2 shadow">
      <img alt="food" src={url} />
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
