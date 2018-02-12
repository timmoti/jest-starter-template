const add = require("../src/main");

test("should be a descriptive message", () => {
  expect(add(1, 1)).toEqual(2);
});
