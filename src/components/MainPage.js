import React, { Component } from "react";
import loadable from "@loadable/component";
import "./MainPage.css";

import Header from "./Header";
import Scroll from "./Scroll";
import ErrorBoundary from "../containers/ErrorBoundary";

const CardList = loadable(() => import("./CardList"));
const SearchBox = loadable(() => import("./SearchBox"));
const StarchFoodButton = loadable(() => import("./StarchFoodButton"));
const ProteinFoodButton = loadable(() => import("./ProteinFoodButton"));

class MainPage extends Component {
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

  filterFoods = (index, foods) => {
    var filteredFoods = [];
    if (index !== -1 && !this.props.searchfield.length) {
      filteredFoods = [foods[index]];
    } else if (foods.length > 0) {
      filteredFoods = foods.filter((food) => {
        return food.name
          .toLowerCase()
          .includes(this.props.searchfield.toLowerCase());
      });
    }
    return filteredFoods;
  };

  render() {
    const { starch_index, protein_index } = this.state;
    const {
      starchyFoods,
      proteinFoods,
      onSearchChange,
      isPending,
    } = this.props;
    var StarchyFoods = this.filterFoods(starch_index, starchyFoods);
    var ProteinFoods = this.filterFoods(protein_index, proteinFoods);

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

export default MainPage;
