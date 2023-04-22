const sumOfArrays = require('../scripts/recursion');

test("sum of first array must be 10", () => {
  expect(sumOfArrays([1,2,3,4])).toBe(10);
})

test("sum of second array must be 45", () => {
  expect(sumOfArrays([1,2,3,4,5,6, [7,8,9]])).toBe(45);
})

test("sum of third array must be 55", () => {
  expect(sumOfArrays([1,2,3, [4,5,6], [7,8,9], 10])).toBe(55);
})

