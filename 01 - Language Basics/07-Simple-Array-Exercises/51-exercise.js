/**
 * Exercise 51 - The first and last items
 * Given the following array:
 * const arr = [102, 4, 22, 7, 32, 9, 40];
 * Define two variables called first and last that give pick out the first and last
 * values from the array. Check your variables have the values of 102 and 40
 * respectively by logging the result to the console.
 */

const arr = [102, 4, 22, 7, 32, 9, 40];
const firstValue = arr[0];
const lastValue= arr[arr.length-1];

console.log(`The first and last values of the array are: ${firstValue} , ${lastValue}`);