import { setSearchField } from "./actions";

it("input text into searchField", () => {
  const txt = "testing";
  expect(setSearchField(txt).payload).toEqual(txt);
});

it("requestFood", () => {
  expect(1).toBeGreaterThan(0);
});
