/**
 * Exercise 81 - Sum all the numbers
 *
 * Given the following array:
 *
 * const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 *
 * Use a JavaScript for or while loop to add up (sum) the values
 * that are stored in the numbers array.
 * Display your result in the console.
 *
 * BONUS:
 * Solve the same problem again using an appropriate ES6 array method.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Version A — using Loop to solve the above question....");
console.log("Using a For loop to solve this question.....");

let forStorage = 0,
  whileStorage = 0,
  startingPoint = 0;

for (let i = 0; i < numbers.length; i++) {
  //console.log(`Index of ${i} is: ${numbers[i]}`);
  forStorage = forStorage + numbers[i];
}

console.log(
  `The sum of the entire array of numbers (using for loop) is: ${forStorage}`,
);

console.log(" ");
console.log("Using a While loop to solve this question.....");

while (startingPoint < numbers.length) {
  whileStorage = whileStorage + numbers[startingPoint];
  startingPoint++;
}

console.log(
  `The sum of the entire array of numbers (using while loop) is: ${whileStorage}`,
);

console.log(" ");
console.log("Version B — Using ES6 array method: reduce");

const total = numbers.reduce((acc, val) => {
  return (acc = acc + val);
}, 0);

console.log(
  `The sum of the entire array of numbers (using ES6 method loop) is: ${total}`,
);
