/**
 * Exercise 83 - How many sixes
 *
 * Given the following array:
 *
 * const numbers = [1, 6, 2, 6, 3, 6, 6, 4, 6, 5, 6];
 *
 * Use a JavaScript for or while loop to count the number of sixes
 * (value of '6') that are in the numbers array.
 * Display your result to the console.
 *
 * BONUS:
 * Solve the same problem again using an appropriate ES6 array method.
 */

const numbers = [1, 6, 2, 6, 3, 6, 6, 4, 6, 5, 6];
let forCountSixes = 0,
  whileCountSixes = 0,
  whileCounter = 0;

console.log("Version A — using Loop to solve the above question....");
console.log("*******************************************************");
console.log("Using a FOR loop to solve this question.....");

for (let i = 0; i < numbers.length; i++) {
  //console.log(`Index ${i}'s value is: ${numbers[i]}`);
  if (numbers[i] === 6) {
    //console.log(`Index ${i}'s value is: ${numbers[i]}`);
    forCountSixes = forCountSixes + 1;
  }
}

console.log(
  `The total number of 6's in the numbers array using FOR loop is: ${forCountSixes}`,
);

console.log(" ");
console.log("Using a WHILE loop to solve this question");

while (whileCounter < numbers.length) {
  //   console.log(
  //     `Counter is: ${whileCounter} and it's value is: ${numbers[whileCounter]}`,
  //   );
  if (numbers[whileCounter] === 6) {
    whileCountSixes = whileCountSixes + 1;
  }
  whileCounter++;
}

console.log(
  `The total number of 6's in the numbers array using WHILE loop is: ${whileCountSixes}`,
);
console.log("*******************************************************");

console.log(" ");

console.log("Now using ES6 method - reduce() to solve the above problem");

const totalNumberOfSixesES6 = numbers.reduce((acc, val) => {
  if (val === 6) {
    //acc = acc + 1;
    acc++;
  }
  return acc;
}, 0);

console.log(
  `The total number of sixes using ES6 method is: ${totalNumberOfSixesES6}`,
);
