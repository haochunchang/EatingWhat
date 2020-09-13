import { combineReducers } from "redux";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_FOODS_PENDING,
  REQUEST_FOODS_SUCCESS,
  REQUEST_FOODS_FAILED,
} from "./constants";

// Many Reducers below
//
//
const initialSearchState = {
  searchfield: "",
};

export const searchFoods = (state = initialSearchState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchfield: action.payload });
    // or {...state, searchfield: action.payload}
    default:
      return state;
  }
};

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
  searchFoods,
  requestFoods,
});
