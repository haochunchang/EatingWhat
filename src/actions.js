import {
  CHANGE_SEARCH_FIELD,
  REQUEST_FOODS_PENDING,
  REQUEST_FOODS_SUCCESS,
  REQUEST_FOODS_FAILED,
} from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestFoods = () => (dispatch) => {
  dispatch({ type: REQUEST_FOODS_PENDING });
  fetch(
    "https://my-json-server.typicode.com/haochunchang/food-json-server/posts"
  )
    .then((response) => response.json())
    .then((data) => {
      var i = 0;
      for (i = 0; i < data.length; i++) {
        var fname = data[i].name.toLowerCase();
        data[
          i
        ].url = `https://github.com/haochunchang/food-json-server/blob/master/images/${fname}.jpg?raw=true`;
      }
      dispatch({ type: REQUEST_FOODS_SUCCESS, payload: data });
    })
    .catch((error) => dispatch({ type: REQUEST_FOODS_FAILED, payload: error }));
};
