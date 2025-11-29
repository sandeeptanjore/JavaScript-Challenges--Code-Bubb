/**
 * Exercise 28 - The first and last
 * Given the following string:
 * const str = 'that is the question';
 * Use JavaScript to get the first and last characters from the original string above.
 * Log the result to the console to check your solution.
 */

const str = 'that is the question';
const firstAlphabet = str.charAt(0);
//index calculation - str.length - 1 is exactly right for getting the last character
const lastAlphabet= str.charAt((str.length)-1);

console.log(firstAlphabet);

console.log(lastAlphabet);
