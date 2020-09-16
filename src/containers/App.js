import React, { Component } from "react";

import "./App.css";
import Header from "../components/Header";
import StarchFoodButton from "../components/StarchFoodButton";
import ProteinFoodButton from "../components/ProteinFoodButton";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "./ErrorBoundary";

import { connect } from "react-redux";

import { setSearchField, requestFoods } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchfield: state.searchFoods.searchfield,
    foods: state.requestFoods.foods,
    isPending: state.requestFoods.isPending,
    error: state.requestFoods.error,
  };
};

const filterFoods = (index, foods, searchfield) => {
  var filteredFoods = [];
  if (index !== -1 && !searchfield.length) {
    filteredFoods = [foods[index]];
  } else if (foods.length > 0) {
    filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchfield.toLowerCase());
    });
  }
  return filteredFoods;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestFoods: () => dispatch(requestFoods()),
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      index: -1,
    };
  }

  componentDidMount() {
    this.props.onRequestFoods();
  }

  onClicked() {
    const random = Math.floor(Math.random() * this.props.foods.length);
    this.setState({ index: random, searchfield: "" });
  }

  render() {
    const { index } = this.state;
    const { foods, searchfield, onSearchChange, isPending } = this.props;
    var StarchyFoods = filterFoods(index, foods, searchfield);
    var ProteinFoods = filterFoods(index, foods, searchfield);

    return isPending ? (
      <div className="App">
        <header className="header">
          <h1 className="f1">Loading...</h1>
        </header>
      </div>
    ) : (
      <div className="App">
        <Header />
        <div className="row">
          <SearchBox searchChange={onSearchChange} />

          <div className="column">
            <StarchFoodButton onClicked={this.onClicked.bind(this)} />
            <Scroll>
              <ErrorBoundary>
                <CardList foods={StarchyFoods} />
              </ErrorBoundary>
            </Scroll>
          </div>

          <div className="column">
            <ProteinFoodButton onClicked={this.onClicked.bind(this)} />
            <Scroll>
              <ErrorBoundary>
                <CardList foods={ProteinFoods} />
              </ErrorBoundary>
            </Scroll>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
