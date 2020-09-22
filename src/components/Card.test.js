import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

describe("Card", () => {
  const mockProps = {
    name: "sushi",
    url: "www.sushi.com",
  };
  it("matches Card component snapshot", () => {
    expect(shallow(<Card props={mockProps} />)).toMatchSnapshot();
  });
});
