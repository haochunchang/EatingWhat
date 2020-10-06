import React, { Fragment } from "react";
import Card from "./Card";
import { Food } from "./MainPage";

const CardList = ({ foods }: { foods: Array<Food> }) => {
  const cardComponent = foods.map((food, i) => {
    return <Card key={i} url={foods[i].url} name={foods[i].name} />;
  });
  return <Fragment>{cardComponent}</Fragment>;
};

export default CardList;
