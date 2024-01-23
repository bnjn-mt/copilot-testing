// TODO: Write a function that squares every number in an array and returns any triple digit results. Return an empty array if there are no triple digit results.
// Example: [3, 4, 1, 7, 10, 15] -> [100, 225]

function tripleDigitSquares(numbers) {
  squared = numbers.map(x => x**2);
  tripleDigits = squared.filter(x => 99 < x && x < 1000);
  return tripleDigits;
}

module.exports = tripleDigitSquares;