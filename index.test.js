const tripleDigitSquares = require('./index');

test('should return triple digit squares', () => {
  const numbers = [3, 4, 1, 7, 10, 15];
  const result = tripleDigitSquares(numbers);
  expect(result).toEqual([100, 225]);
});

/* 
Write unit tests for tripleDigitSquares that cover the following cases:
- A single triple digit square
- Ten triple digit squares
- Hundred triple digit squares
- Negative inputs that result in triple digit squares
- The function returns an empty array when given an empty array
- The function returns an empty array when given an array of numbers that do not have any triple digit squares
- Any other edge cases you can think of
*/ 

test('should return a single triple digit square', () => {
  const numbers = [10, 11, 12];
  const result = tripleDigitSquares(numbers);
  expect(result).toEqual([100]);
});

test('should return ten triple digit squares', () => {  
  const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const result = tripleDigitSquares(numbers);
  expect(result).toEqual([100, 121, 144, 169, 196, 225, 256, 289, 324, 361]);
});

test('should return hundred triple digit squares', () => {
  const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                   20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                   30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
                   40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
                   50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                   60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
                   70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
                   80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
                   90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
                   100, 101, 102, 103, 104, 105, 106, 107, 108, 109];
  const result = tripleDigitSquares(numbers);
  expect(result).toEqual([100, 121, 144, 169, 196, 225, 256, 289, 324, 361,
                          400, 441, 484, 529, 576, 625, 676, 729, 784, 841,
                          900, 961, 1024, 1089, 1156, 1225, 1296, 1369, 1444, 1521,
                          1600, 1681, 1764, 1849, 1936, 2025, 2116, 2209, 2304, 2401,
                          2500, 2601, 2704, 2809, 2916, 3025, 3136,
                          3249, 3364, 3481, 3600, 3721, 3844, 3969,
                          4096, 4225, 4356, 4489, 4624, 4761, 4900,
                          5041, 5184, 5329, 5476, 5625, 5776, 5929,
                          6084, 6241, 6400, 6561, 6724, 6889, 7056,
                          7225, 7396, 7569, 7744, 7921, 8100, 8281,
                          8464, 8649, 8836, 9025, 9216, 9409, 9604,
                          9801]);
});

test('should return negative inputs that result in triple digit squares', () => {
  const numbers = [-10, -11, -12];
  const result = tripleDigitSquares(numbers);
  expect(result).toEqual([100]);
});

test('should return an empty array when given an empty array', () => {
  const numbers = [];
  const result = tripleDigitSquares(numbers);
  expect(result).toEqual([]);
});

test('should return an empty array when given an array of numbers that do not have any triple digit squares', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = tripleDigitSquares(numbers);
  expect(result).toEqual([]);
});
