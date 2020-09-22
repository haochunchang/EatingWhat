import React from "react";
import { shallow } from "enzyme";
import StarchFoodButton from "./StarchFoodButton";
import ProteinFoodButton from "./ProteinFoodButton";

describe("FoodButton", () => {
  it("matches StarchFoodButton snapshot", () => {
    expect(shallow(<StarchFoodButton />)).toMatchSnapshot();
  });
  it("matches ProteinFoodButton snapshot", () => {
    expect(shallow(<ProteinFoodButton />)).toMatchSnapshot();
  });
});
