import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ foods }) => {
  const cardComponent = foods.map((food, i) => {
    return (
      <Card
        key={i}
        url={foods[i].url}
        name={foods[i].name}
        category={foods[i].category}
      />
    );
  });
  return <Fragment>{cardComponent}</Fragment>;
};

export default CardList;
