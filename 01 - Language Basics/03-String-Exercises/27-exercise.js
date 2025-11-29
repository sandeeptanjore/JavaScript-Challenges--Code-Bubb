/**
 * Exercise 27 - To sentence case
 * Convert the following string to be sentence case (first letter of the string capitalised).
 * const str = 'to be or not to be';
 */

const str = 'to be or not to be';
const firstAlphabet = str.charAt(0).toUpperCase();
const solution= firstAlphabet+''+str.substring(1);
console.log(solution);