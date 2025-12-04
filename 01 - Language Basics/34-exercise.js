/**
 * Exercise 34 - Strings and numbers don't match
 * Given the following variables:
 * const a = 2;
 * const b = '2';
 * Use JavaScript to add the two variables together to achieve the result of 4. You
 * can display your result in the console to check.
 */

const a = 2;
const b = '2';
let result= a + parseInt(b)
console.log(`The result of adding a number and string is : ${result}`);