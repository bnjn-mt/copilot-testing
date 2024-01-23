const tripleDigitSquares = require('./index');

test('should return triple digit squares', () => {
  const numbers = [3, 4, 1, 7, 10, 15];
  const result = tripleDigitSquares(numbers);
  expect(result).toEqual([100, 225]);
});