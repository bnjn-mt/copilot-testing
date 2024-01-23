# Triple Digit Squares

This project provides a JavaScript function called `tripleDigitSquares` that takes an array of numbers as input and returns an array containing the squares of the numbers that are triple digits.

## Installation

To use the `tripleDigitSquares` function in your project, you can simply copy the `index.js` file into your project directory.

Before running the unit tests, make sure to install the required dependencies by running the following command:

```bash
npm install
```
## Usage
The tripleDigitSquares function squares each number in the input array and filters out any numbers that are not triple digits. The resulting array, containing the triple digit squares, is returned.

```
const tripleDigitSquares = require('./index');

const numbers = [3, 4, 1, 7, 10, 15];
const result = tripleDigitSquares(numbers);
console.log(result); // Output: [100, 225]
```

## Running the Unit Tests
This project includes unit tests to verify the correctness of the tripleDigitSquares function. To run the tests, use the following command:
```
npm test
```

The test results will be displayed in the console, indicating whether the function is working as expected.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.