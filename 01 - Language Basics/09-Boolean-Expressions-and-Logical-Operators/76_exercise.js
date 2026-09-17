/**
 * Exercise 76 - Grading
 *
 * Given the variable:
 *
 * let score = 65;
 *
 * Write an if statement in JavaScript that displays a character on the console
 * (representing a grading mark) depending on the value stored in the score
 * variable. The grading is as follows:
 *
 * More than 50 - D
 * More than 60 - C
 * More than 70 - B
 * More than 80 - A
 *
 * For anything else a value of U should be displayed.
 */

let score = 65;

if (score > 80) {
  console.log("A");
} else if (score > 70 && score <= 80) {
  console.log("B");
} else if (score > 60 && score <= 70) {
  console.log("C");
} else if (score > 50 && score <= 60) {
  console.log("D");
} else {
  console.log("U");
}
