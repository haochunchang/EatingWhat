import * as actions from "./actions";
import {
  REQUEST_FOODS_PENDING,
  REQUEST_FOODS_SUCCESS,
  REQUEST_FOODS_FAILED,
} from "./constants";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);
const store = mockStore({});

describe("requestFood actions", () => {
  const url =
    "https://my-json-server.typicode.com/haochunchang/food-json-server/posts";
  beforeEach(() => {
    fetch.resetMocks();
    store.clearActions();
  });

  it("should handle pending requestFood", () => {
    store.dispatch(actions.requestFoods(url));
    const action = store.getActions();
    expect(action[0]).toEqual({ type: REQUEST_FOODS_PENDING });
  });

  it("should handle success requestFood", async () => {
    const expectedSuccessActions = [
      { type: REQUEST_FOODS_PENDING },
      {
        type: REQUEST_FOODS_SUCCESS,
        payload: [
          {
            name: "French Fries",
            url: `https://github.com/haochunchang/food-json-server/blob/master/images/french fries.jpg?raw=true`,
          },
        ],
      },
    ];

    fetch.mockResponseOnce(
      JSON.stringify([
        {
          name: "French Fries",
          url: `https://github.com/haochunchang/food-json-server/blob/master/images/french fries.jpg?raw=true`,
        },
      ])
    );
    expect.assertions(2);
    await store.dispatch(actions.requestFoods(url)).then(() => {
      expect(store.getActions()).toEqual(expectedSuccessActions);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  it("should return failing requestFood", async () => {
    fetch.mockReject(() => Promise.reject("API is down"));

    const expectedFailedActions = [
      { type: REQUEST_FOODS_PENDING },
      { type: REQUEST_FOODS_FAILED, payload: "API is down" },
    ];

    expect.assertions(2);
    await store.dispatch(actions.requestFoods(url)).then(() => {
      expect(store.getActions()).toEqual(expectedFailedActions);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
