import React from "react";

const Card = (props) => {
  const { id, name, category } = props;
  return (
    <div className="tc bg-light-green dib br5 pa3 ma3 grow bw2 shadow">
      <img
        alt="robot"
        src={`https://robohash.org/${name}${id}?200x200?set=set4`}
      />
      <div>
        <p>{name}</p>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default Card;
