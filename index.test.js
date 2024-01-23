const tripleDigitSquares = require('./index');

test('should return triple digit squares', () => {
  const numbers = [3, 4, 1, 7, 10, 15];
  const result = tripleDigitSquares(numbers);
  expect(result).toEqual([100, 225]);
});

test('should return empty array for an empty input array', () => {
  const numbers = [];
  const result = tripleDigitSquares(numbers);
  expect(result).toEqual([]);
});

test('should return empty array when there are no triple digit squares', () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const result = tripleDigitSquares(numbers);
  expect(result).toEqual([]);
});

test('should return triple digit squares with negative numbers', () => {
  const numbers = [-1, -2, -3, -4, -5, -6];
  const result = tripleDigitSquares(numbers);
  expect(result).toEqual([100, 225, 400, 625]);
});

test('should ignore non-numeric elements in the input array', () => {
  const numbers = [3, 4, '5', 6, 'seven', 8];
  const result = tripleDigitSquares(numbers);
  expect(result).toEqual([225, 400, 625, 900]);
});

test('should handle floating-point numbers in the input array', () => {
  const numbers = [1.5, 2.5, 3.5, 4.5];
  const result = tripleDigitSquares(numbers);
  expect(result).toEqual([225, 400]);
});

test('should handle duplicate numbers in the input array', () => {
  const numbers = [3, 3, 3, 3];
  const result = tripleDigitSquares(numbers);
  expect(result).toEqual([900]);
});

test('should handle large numbers in the input array', () => {
  const numbers = [1000, 10000, 100000];
  const result = tripleDigitSquares(numbers);
  expect(result).toEqual([]);
});

test('should not modify the original input array', () => {
  const numbers = [3, 4, 1, 7, 10, 15];
  const result = tripleDigitSquares(numbers);
  expect(numbers).toEqual([3, 4, 1, 7, 10, 15]);
});
