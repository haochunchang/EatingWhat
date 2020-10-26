import React, { Fragment } from "react";
import Card from "./Card";
import { Food } from "./MainPage";

const CardList = ({ foods }: { foods: Array<Food> }) => {
  const cardComponent = foods.map((food, i) => {
    return <Card key={i} url={food.url} name={food.name} />;
  });

  return <Fragment>{cardComponent}</Fragment>;
};

export default CardList;
