/**
 * Exercise 82 - Show every other item
 *
 * Given the following array:
 *
 * const fruits = ['Cherry', 'Apple', 'Banana', 'Orange', 'Kiwi', 'Pineapple'];
 *
 * Use a JavaScript for or while loop to only display every other item
 * in the fruits array in the console.
 *
 * Output should be:
 * 'Apple', 'Orange', 'Pineapple'
 *
 * BONUS:
 * Solve the same problem again using an appropriate ES6 array method.
 */

const fruits = ["Cherry", "Apple", "Banana", "Orange", "Kiwi", "Pineapple"];
let letFruits = [],
  whileFruits = [],
  whileCntr = 1;

console.log("Version A — using Loop to solve the above question....");
console.log("*******************************************************");
console.log("Using a FOR loop to solve this question.....");

for (let i = 1; i < fruits.length; i = i + 2) {
  letFruits.push(fruits[i]);
}

console.log(`Final output using a FOR loop is: ${letFruits}`);

console.log(" ");
console.log("Now using a WHILE loop to solve this question.....");

while (whileCntr < fruits.length) {
  whileFruits.push(fruits[whileCntr]);
  whileCntr = whileCntr + 2;
}

console.log(`Final output using a WHILE loop is: ${whileFruits}`);
console.log("*******************************************************");
console.log(" ");
console.log(
  "Version B — using the ES6 filter() method to solve the above question....",
);

const fruitsoutput = fruits.filter((fruit, index) => index % 2 != 0);
console.log(fruitsoutput);
