import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

describe("MainPage testing", () => {
  let wrapper;
  let mainpage;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      onRequestFoods: jest.fn(),
      onSearchChange: jest.fn(),
      starchyFoods: [
        {
          id: 1,
          name: "Soba",
          category: "main food",
        },
      ],
      proteinFoods: [
        {
          id: 5,
          name: "Steak",
          category: "meat",
        },
      ],
      searchfield: "",
      isPending: false,
    };
    wrapper = shallow(<MainPage {...mockProps} />);
    mainpage = wrapper.instance();
  });

  it("renders MainPage correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("test componentDidMount", async () => {
    expect.assertions(1);
    await mainpage.componentDidMount();
    expect(mainpage.props.onRequestFoods).toHaveBeenCalledTimes(2);
  });

  it("filter foods by searchfield", () => {
    expect(mainpage.filterFoods(-1, [])).toEqual([]);
    expect(mainpage.filterFoods(-1, mockProps.proteinFoods)).toEqual(
      mockProps.proteinFoods
    );

    mockProps.searchfield = "st";
    const mainpage_with_searchfield = shallow(
      <MainPage {...mockProps} />
    ).instance();
    expect(
      mainpage_with_searchfield.filterFoods(-1, mockProps.starchyFoods)
    ).toEqual([]);
  });

  it("tests onClick event on food button", () => {
    mainpage.onClickedStarch();
    mainpage.onClickedProtein();
    expect(mainpage.state.starch_index).toBeGreaterThan(-1);
    expect(mainpage.state.protein_index).toBeGreaterThan(-1);
  });
});
