import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import Button from "../components/Button";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: [],
      searchfield: "",
      index: -1,
    };
  }

  componentDidMount() {
    fetch(
      "https://my-json-server.typicode.com/haochunchang/food-json-server/posts/"
    )
      .then((response) => response.json())
      .then((posts) => this.setState({ foods: posts }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  onClicked = (event) => {
    const random = Math.floor(Math.random() * this.state.foods.length + 1);
    this.setState({ index: random });
    console.log(event.target.value);
  };

  render() {
    const { foods, searchfield, index } = this.state;
    var filteredFoods = [];
    if (index < 0) {
      filteredFoods = foods.filter((food) => {
        return food.name.toLowerCase().includes(searchfield.toLowerCase());
      });
    } else {
      filteredFoods = foods.filter((food) => food.id === index);
    }
    return !foods.length ? (
      <div className="App">
        <header className="header">
          <h1 className="f1">Loading...</h1>
        </header>
      </div>
    ) : (
      <div className="App">
        <header className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="f1">What Do You Want To Eat?</h1>
        </header>
        <div className="tc">
          <SearchBox searchChange={this.onSearchChange} />
          <Button />
          <Scroll>
            <CardList foods={filteredFoods} />
          </Scroll>
        </div>
      </div>
    );
  }
}

export default App;
