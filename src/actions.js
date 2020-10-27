import {
  REQUEST_FOODS_PENDING,
  REQUEST_FOODS_SUCCESS,
  REQUEST_FOODS_FAILED,
} from "./constants";

import { fetchJSON, getImageURL } from "./api/api";

export const requestFoods = (foodURL) => (dispatch) => {
  dispatch({ type: REQUEST_FOODS_PENDING });

  return fetchJSON(foodURL)
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        data[i].url = getImageURL(data[i].name);
      }
      dispatch({
        type: REQUEST_FOODS_SUCCESS,
        payload: data,
      });
    })
    .catch((error) =>
      dispatch({
        type: REQUEST_FOODS_FAILED,
        payload: error,
      })
    );
};
