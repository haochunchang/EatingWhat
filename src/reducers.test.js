import {
  REQUEST_FOODS_PENDING,
  REQUEST_FOODS_SUCCESS,
  REQUEST_FOODS_FAILED,
} from "./constants";
import * as reducers from "./reducers";

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
