import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

import App from "./App";

const mockStore = configureMockStore([thunkMiddleware]);
const store = mockStore({});

describe("App testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("renders App correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
