/**
 *
 * Exercise 20 - First 3 characters
 * Given the following string:
 * const str = 'The quick brown fox';
 * Create a new variable that contains just the first 3 characters of the original
 * string above. You can log the result to the console to check if it is correct
 */

const str = 'The quick brown fox';
const newString = str.substring(0,3); // one way of doing
const sliceString = str.slice(0, 3);
console.log(newString);
console.log(sliceString);