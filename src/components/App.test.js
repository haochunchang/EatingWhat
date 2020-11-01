import React from "react";
import { Provider } from "react-redux";
import { shallow, mount, configure } from "enzyme";
import { act } from "react-dom/test-utils";
import Adapter from "enzyme-adapter-react-16";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

import App, { filterFoods } from "./App";

configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunkMiddleware]);
const store = mockStore({
  requestFoods: {
    foods: [
      {
        name: "Ice cream",
        category: "main food",
        url: "",
      },
      {
        name: "Pork",
        category: "meat",
        url: "",
      },
    ],
    isPending: false,
    error: "",
  },
});

const pendingStore = mockStore({
  requestFoods: {
    foods: [],
    isPending: true,
    error: "",
  },
});

describe("App testing", () => {
  let shallowWrapper;
  let wrapper;

  beforeAll(() => {
    shallowWrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("renders App correctly", () => {
    expect(shallowWrapper).toMatchSnapshot();
  });

  it("renders Pending App correctly", () => {
    const pendingWrapper = shallow(
      <Provider store={pendingStore}>
        <App />
      </Provider>
    );
    expect(pendingWrapper).toMatchSnapshot();
  });

  it("should update starch foods on click", () => {
    const starchButton = wrapper.find("#starch-button").hostNodes();
    const handleClick = jest.spyOn(starchButton.props(), "onClick");
    act(() => starchButton.prop("onClick")());
    expect(handleClick).toHaveBeenCalled();
  });

  it("should update protein foods on click", () => {
    const proteinButton = wrapper.find("#protein-button").hostNodes();
    const handleClick = jest.spyOn(proteinButton.props(), "onClick");
    act(() => proteinButton.prop("onClick")());
    expect(handleClick).toHaveBeenCalled();
  });

  it("tests filterFood", () => {
    const foods = [
      { name: "rice", category: "main food" },
      { name: "pork", category: "meat" },
    ];
    const filtered = filterFoods(foods);
    expect(filtered).toHaveProperty("starchyFoods", [foods[0]]);
    expect(filtered).toHaveProperty("proteinFoods", [foods[1]]);
  });
});
