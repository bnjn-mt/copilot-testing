/**
 * Squares every number in an array and returns any triple digit results.
 * If there are no triple digit results, it returns an empty array.
 *
 * @param {number[]} numbers - The array of numbers to be squared.
 * @returns {number[]} - The array of triple digit squares.
 *
 * @example
 * const numbers = [3, 4, 1, 7, 10, 15];
 * const result = tripleDigitSquares(numbers);
 * console.log(result); // Output: [100, 225]
 *
 * @remarks
 * This function squares each number in the input array using the `map` method.
 * It then filters out any numbers that are not triple digits using the `filter` method.
 * The resulting array, containing the triple digit squares, is returned.
 * Non-numeric elements in the input array are ignored.
 */

function tripleDigitSquares(numbers) {
  squared = numbers.map(x => x**2);
  tripleDigits = squared.filter(x => 99 < x && x < 1000);
  return tripleDigits;
}

module.exports = tripleDigitSquares;