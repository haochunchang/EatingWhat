import React from "react";
import { shallow } from "enzyme";
import SearchButton from "./SearchButton";

describe("SearchButton", () => {
  it("matches not decided SearchButton snapshot", () => {
    expect(shallow(<SearchButton isDecided={false} />)).toMatchSnapshot();
  });

  it("matches decided SearchButton snapshot", () => {
    expect(shallow(<SearchButton isDecided={true} />)).toMatchSnapshot();
  });
});
