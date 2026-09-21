/**
 * Exercise 79 - Count backwards
 *
 * Using any type of loop, count backwards from 10 to 1 with JavaScript
 * and display these numbers in the console.
 */

console.log("*****************");
console.log("Using while loop");

let count = 10;
while (count >= 1) {
  console.log(`Count is: ${count}`);
  count--;
}

console.log("");
console.log("*****************");
console.log("Using for loop");
for (let i = 10; i >= 1; i--) {
  console.log(`Count : ${i}`);
}
