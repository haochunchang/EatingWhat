import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  it("matches Header snapshot", () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});
