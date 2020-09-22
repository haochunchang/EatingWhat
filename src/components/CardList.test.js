import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";

describe("CardList", () => {
  it("matches CardList component snapshot", () => {
    const mockFoods = [
      {
        id: 1,
        name: "noodles",
        url: "https://whereismyfood.com",
        category: "main food",
      },
    ];
    expect(shallow(<CardList foods={mockFoods} />)).toMatchSnapshot();
  });
});
