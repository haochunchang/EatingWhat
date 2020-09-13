import React from "react";

const Card = (props) => {
  const { url, name, category } = props;
  return (
    <div className="tc bg-light-green dib br5 pa3 ma3 grow bw2 shadow">
      <img alt="food" src={url} />
      <div>
        <p>{category}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
