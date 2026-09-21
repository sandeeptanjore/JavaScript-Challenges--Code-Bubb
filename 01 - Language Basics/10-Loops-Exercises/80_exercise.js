/**
 * Exercise 80 - Add until 25
 *
 * Using any type of loop, count from the value of 1 to 25,
 * adding each number together to form a total
 * (e.g. 1 + 2 + 3 + 4 ...)
 * then display this value in the console.
 */

console.log("*****************");
console.log("Using for loop");

let sum = 0,
  total = 0,
  limit = 1;

for (let i = 1; i <= 25; i++) {
  sum = sum + i;
}

console.log(`The total value of 1 to 25 is: ${sum}`);

console.log("*****************");
console.log("Using while loop");

while (limit <= 25) {
  total = total + limit;
  limit++;
}

console.log(`The total value of 1 to 25 is: ${total}`);
