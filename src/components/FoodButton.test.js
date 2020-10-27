import React from "react";
import { shallow } from "enzyme";
import FoodButton from "./FoodButton";

describe("FoodButton", () => {
  it("matches FoodButton snapshot", () => {
    expect(shallow(<FoodButton FoodName={"Starch Food"} />)).toMatchSnapshot();
  });
});
