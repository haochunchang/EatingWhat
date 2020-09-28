import {
  CHANGE_SEARCH_FIELD,
  REQUEST_FOODS_PENDING,
  REQUEST_FOODS_SUCCESS,
  REQUEST_FOODS_FAILED,
} from "./constants";
import * as reducers from "./reducers";

describe("searchFoods", () => {
  it("should return initial state", () => {
    expect(reducers.searchFoods(undefined, {})).toEqual({ searchfield: "" });
  });

  it("should handle CHANGE_SEARCH_FIELD", () => {
    const mockSearchState = {
      searchfield: "Apple and pears",
    };
    const action = {
      type: CHANGE_SEARCH_FIELD,
      payload: "Apple",
    };
    expect(reducers.searchFoods(mockSearchState, {})).toEqual(mockSearchState);
    expect(reducers.searchFoods(mockSearchState, action).searchfield).toEqual(
      action.payload
    );
  });
});

describe("requestFood", () => {
  let initialFoodState = {
    isPending: false,
    foods: [],
    error: "",
  };

  it("should handle empty action", () => {
    expect(reducers.requestFoods(initialFoodState, {})).toEqual(
      initialFoodState
    );
  });

  it("should handle REQUEST_FOOD_PENDING", () => {
    expect(
      reducers.requestFoods(initialFoodState, { type: REQUEST_FOODS_PENDING })
    ).toEqual({
      foods: [],
      isPending: true,
      error: "",
    });
  });

  it("sould handle REQUEST_FOOD_SUCCESS", () => {
    const action = {
      type: REQUEST_FOODS_SUCCESS,
      payload: [
        {
          id: 999,
          name: "Sandwich",
          category: "main food",
        },
      ],
    };
    expect(reducers.requestFoods(initialFoodState, action)).toMatchObject({
      foods: action.payload,
      isPending: false,
    });
  });

  it("sould handle REQUEST_FOOD_FAILED", () => {
    const action = {
      type: REQUEST_FOODS_FAILED,
      payload: "NOOOOO!",
    };
    expect(reducers.requestFoods(initialFoodState, action)).toMatchObject({
      isPending: false,
      error: "NOOOOO!",
    });
  });
});
