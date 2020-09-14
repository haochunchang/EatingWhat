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
      for (var index = 0; index < data.length; index++) {
        var name = data[index].name.toLowerCase();
        data[
          index
        ].url = `https://github.com/haochunchang/food-json-server/blob/master/images/${name}.jpg?raw=true`;
      }
      dispatch({ type: REQUEST_FOODS_SUCCESS, payload: data });
    })
    .catch((error) => dispatch({ type: REQUEST_FOODS_FAILED, payload: error }));
};
