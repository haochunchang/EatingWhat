export const FOOD_GITHUB_URL =
  "https://my-json-server.typicode.com/haochunchang/food-json-server/posts";

export const FOOD_LOCAL_URL = "localhost:3000";

export const fetchJSON = (url) => {
  return fetch(url).then((response) => response.json());
};

const ImageBaseURL =
  "https://github.com/haochunchang/food-json-server/blob/master/images/";

export const getImageURL = (name) => {
  return `${ImageBaseURL}${name.toLowerCase()}.jpg?raw=true`;
};
