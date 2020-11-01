export const FOOD_GITHUB_URL =
  "https://my-json-server.typicode.com/haochunchang/food-json-server/posts";

export const fetchFood = (url) => {
  return fetch(url).then((response) => response.json());
};

export const getImageURL = (name) => {
  const ImageBaseURL =
    "https://github.com/haochunchang/food-json-server/blob/master/images/";
  return `${ImageBaseURL}${name.toLowerCase()}.jpg?raw=true`;
};
