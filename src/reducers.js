import { combineReducers } from "redux";
import {
  REQUEST_FOODS_PENDING,
  REQUEST_FOODS_SUCCESS,
  REQUEST_FOODS_FAILED,
} from "./constants";

const initialFoodState = {
  isPending: false,
  foods: [],
  error: "",
};

export const requestFoods = (state = initialFoodState, action = {}) => {
  switch (action.type) {
    case REQUEST_FOODS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_FOODS_SUCCESS:
      return Object.assign({}, state, {
        foods: action.payload,
        isPending: false,
      });
    case REQUEST_FOODS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  requestFoods,
});
