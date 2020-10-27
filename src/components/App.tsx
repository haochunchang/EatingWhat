import React, { useEffect, useState } from "react";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import loadable from "@loadable/component";

import "./App.css";

import { requestFoods } from "../actions";
import { FOOD_GITHUB_URL } from "../api/api";

import Scroll from "./Scroll";
import ErrorBoundary from "../containers/ErrorBoundary";
const CardList = loadable(() => import("./CardList"));
const FoodButton = loadable(() => import("./FoodButton"));

export interface Food {
  id: number;
  name: string;
  category: string;
  url: string;
}

export interface AppState {
  requestFoods: {
    foods: Array<Food>;
    isPending: boolean;
    error: string;
  };
}

function filterFoods(foods: Array<Food>) {
  return {
    starchyFoods: foods.filter((item) => item.category === "main food"),
    proteinFoods: foods.filter((item) => item.category !== "main food"),
  };
}

export default function App(): JSX.Element {
  const typedUseSelector: TypedUseSelectorHook<AppState> = useSelector;
  const isPending = typedUseSelector((state) => state.requestFoods.isPending);
  const foods = typedUseSelector((state) => state.requestFoods.foods);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestFoods(FOOD_GITHUB_URL));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { starchyFoods, proteinFoods } = filterFoods(foods);
  const [starch, setStarch] = useState(starchyFoods);
  const [protein, setProtein] = useState(proteinFoods);

  useEffect(() => {
    setStarch(starchyFoods);
    setProtein(proteinFoods);
  }, [starchyFoods, proteinFoods]);

  const onClickChangeStarch = (): void => {
    const index = Math.floor(Math.random() * starchyFoods.length);
    setStarch([starchyFoods[index]]);
  };

  const onClickChangeProtein = (): void => {
    const index = Math.floor(Math.random() * proteinFoods.length);
    setProtein([proteinFoods[index]]);
  };

  return isPending ? (
    <div className="App">
      <header className="header">
        <h1 className="f1">Loading...</h1>
      </header>
    </div>
  ) : (
    <div className="App">
      <header className="header">
        <h1 className="f1">Eating What?</h1>
      </header>
      <div className="row">
        <div className="column">
          <FoodButton
            onClicked={onClickChangeStarch}
            FoodName={"Starchy Food"}
          />
          <Scroll>
            <ErrorBoundary>
              <CardList foods={starch} />
            </ErrorBoundary>
          </Scroll>
        </div>

        <div className="column">
          <FoodButton
            onClicked={onClickChangeProtein}
            FoodName={"Protein Food"}
          />
          <Scroll>
            <ErrorBoundary>
              <CardList foods={protein} />
            </ErrorBoundary>
          </Scroll>
        </div>
      </div>
    </div>
  );
}
