import React, { Component } from "react";
import loadable from "@loadable/component";
import "./MainPage.css";

import Scroll from "./Scroll";
import ErrorBoundary from "../containers/ErrorBoundary";
import MultipleImageParticles from "./Particles";

const CardList = loadable(() => import("./CardList"));
const FoodButton = loadable(() => import("./FoodButton"));

export interface Food {
  id: number;
  name: string;
  category: string;
  url: string;
}

export interface AppProps {
  starchyFoods: Array<Food>;
  proteinFoods: Array<Food>;
  isPending: boolean;
  error: string;

  onRequestFoods(): void;
}

export interface AppState {
  starch_index: number;
  protein_index: number;

  requestFoods: {
    foods: Array<Food>;
    isPending: boolean;
    error: string;
  };
}

class MainPage extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      starch_index: -1,
      protein_index: -1,
      requestFoods: {
        foods: [],
        isPending: false,
        error: "",
      },
    };
  }

  componentDidMount(): void {
    this.props.onRequestFoods();
  }

  onClickedStarch(): void {
    const srandom = Math.floor(Math.random() * this.props.starchyFoods.length);
    this.setState({
      starch_index: srandom,
    });
  }

  onClickedProtein(): void {
    const prandom = Math.floor(Math.random() * this.props.proteinFoods.length);
    this.setState({
      protein_index: prandom,
    });
  }

  render(): JSX.Element {
    const { starch_index, protein_index } = this.state;
    const { starchyFoods, proteinFoods, isPending } = this.props;

    return isPending ? (
      <div className="App">
        <header className="header">
          <h1 className="f1">Loading...</h1>
        </header>
      </div>
    ) : (
      <div className="App">
        <header className="header">
          <h1 className="f1">What To Eat?</h1>
        </header>
        <div className="row">
          <div className="column">
            <FoodButton
              onClicked={this.onClickedStarch.bind(this)}
              FoodName={"Starchy Food"}
            />
            <Scroll>
              <ErrorBoundary>
                <CardList foods={starchyFoods} />
              </ErrorBoundary>
            </Scroll>
          </div>

          <div className="column">
            <FoodButton
              onClicked={this.onClickedProtein.bind(this)}
              FoodName={"Protein Food"}
            />
            <Scroll>
              <ErrorBoundary>
                <CardList foods={proteinFoods} />
              </ErrorBoundary>
            </Scroll>
          </div>
        </div>
        <MultipleImageParticles />
      </div>
    );
  }
}

export default MainPage;
