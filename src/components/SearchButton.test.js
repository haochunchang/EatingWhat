import React from "react";
import { shallow } from "enzyme";
import SearchButton from "./SearchButton";

describe("SearchButton", () => {
  it("matches not decided SearchButton snapshot", () => {
    expect(
      shallow(<SearchButton id="" isDecided={false} onClicked={jest.fn()} />)
    ).toMatchSnapshot();
  });

  it("matches decided SearchButton snapshot", () => {
    expect(
      shallow(<SearchButton id="" isDecided={true} onClicked={jest.fn()} />)
    ).toMatchSnapshot();
  });
});
