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
      starch_index: -1,
      protein_index: -1,
    };
  }

  componentDidMount() {
    this.props.onRequestFoods();
  }

  onClickedStarch() {
    const srandom = Math.floor(Math.random() * this.props.starchyFoods.length);
    this.setState({
      starch_index: srandom,
      searchfield: "",
    });
  }

  onClickedProtein() {
    const prandom = Math.floor(Math.random() * this.props.proteinFoods.length);
    this.setState({
      protein_index: prandom,
      searchfield: "",
    });
  }

  render() {
    const { starch_index, protein_index } = this.state;
    const {
      starchyFoods,
      proteinFoods,
      searchfield,
      onSearchChange,
      isPending,
    } = this.props;
    var StarchyFoods = filterFoods(starch_index, starchyFoods, searchfield);
    var ProteinFoods = filterFoods(protein_index, proteinFoods, searchfield);

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
            <StarchFoodButton onClicked={this.onClickedStarch.bind(this)} />
            <Scroll>
              <ErrorBoundary>
                <CardList foods={StarchyFoods} />
              </ErrorBoundary>
            </Scroll>
          </div>

          <div className="column">
            <ProteinFoodButton onClicked={this.onClickedProtein.bind(this)} />
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
