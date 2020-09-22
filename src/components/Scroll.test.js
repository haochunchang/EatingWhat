import React from "react";
import { shallow } from "enzyme";
import Scroll from "./Scroll";

describe("Scroll", () => {
  it("matches Scroll snapshot", () => {
    expect(shallow(<Scroll />)).toMatchSnapshot();
  });
});
