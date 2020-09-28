import {
  CHANGE_SEARCH_FIELD,
  REQUEST_FOODS_PENDING,
  REQUEST_FOODS_SUCCESS,
  REQUEST_FOODS_FAILED,
} from "./constants";

import { apiCall } from "./api/api";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestFoods = (url) => (dispatch) => {
  dispatch({ type: REQUEST_FOODS_PENDING });
  return apiCall(url)
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        var name = data[i].name.toLowerCase();
        data[i].url = parseImageURL(name);
      }
      dispatch({ type: REQUEST_FOODS_SUCCESS, payload: data });
    })
    .catch((error) => dispatch({ type: REQUEST_FOODS_FAILED, payload: error }));
};

const parseImageURL = (name) => {
  return `https://github.com/haochunchang/food-json-server/blob/master/images/${name}.jpg?raw=true`;
};
