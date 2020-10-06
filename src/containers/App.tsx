import React, { Component } from "react";
import MainPage from "../components/MainPage";
import { AppState, AppProps, Food } from "../components/MainPage";

import { connect } from "react-redux";
import { setSearchField, requestFoods } from "../actions";
import { FOOD_URL } from "../constants";

interface Dispatch {
  (dispatch: any): Promise<any>;
  type?: string;
  payload?: any;
}

const mapStateToProps = (state: AppState) => {
  return {
    searchfield: state.searchFoods.searchfield,
    starchyFoods: state.requestFoods.foods.filter(
      (item) => (item as Food).category === "main food"
    ),
    proteinFoods: state.requestFoods.foods.filter(
      (item) => (item as Food).category !== "main food"
    ),
    isPending: state.requestFoods.isPending,
    error: state.requestFoods.error,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) =>
      dispatch(setSearchField((event.target as HTMLInputElement).value)),
    onRequestFoods: () => dispatch(requestFoods(FOOD_URL)),
  };
};

class App extends Component<AppProps, AppState> {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
