import React, { Component } from "react";
import MainPage from "../components/MainPage";

import { connect } from "react-redux";
import { setSearchField, requestFoods } from "../actions";
import { FOOD_URL } from "../constants";

const mapStateToProps = (state) => {
  return {
    searchfield: state.searchFoods.searchfield,
    starchyFoods: state.requestFoods.foods.filter(
      (item) => item.category === "main food"
    ),
    proteinFoods: state.requestFoods.foods.filter(
      (item) => item.category !== "main food"
    ),
    isPending: state.requestFoods.isPending,
    error: state.requestFoods.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestFoods: () => dispatch(requestFoods(FOOD_URL)),
  };
};

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
