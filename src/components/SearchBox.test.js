import React from "react";
import { shallow } from "enzyme";
import SearchBox from "./SearchBox";

describe("SearchBox", () => {
  it("matches SearchBox snapshot", () => {
    const searchText = "testing";
    expect(shallow(<SearchBox searchChange={searchText} />)).toMatchSnapshot();
  });
});
