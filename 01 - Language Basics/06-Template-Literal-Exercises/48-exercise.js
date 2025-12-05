/**
 * Exercise 48 - Variable interpolation 2
 * Given the following snippet of code:
 * const error = new Error('Unknown Error');
 * const str = 'An error occurred: ' + error.message;
 * Re-write the above code to use a template literal. You can check your code by
 * logging the new template literal to the console.
 */

const error = new Error('Unknown Error');
const str = `An error occurred: ${error.message}`;
console.log(str);