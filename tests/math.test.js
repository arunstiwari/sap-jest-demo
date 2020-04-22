const {add, subtract} = require('../src/math');

test('4 added to 5 gives 9', () => {
  expect(add(4,5)).toBe(9);
})

test('3 added to 7 gives 10', () => {
  expect(add(3,7)).toBe(10);
})

test('7 subtracted from 9 should give 2', () => {
  expect(subtract(9,7)).toBe(2);
})

test('7 subtracted from 6 should give -1', () => {
  expect(subtract(6,7)).toBe(-1);
})