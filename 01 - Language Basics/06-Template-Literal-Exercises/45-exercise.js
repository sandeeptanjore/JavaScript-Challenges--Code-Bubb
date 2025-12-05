/**
 * Exercise 45 - Change another string
 * Given the following snippet of code:
 * const firstName = 'Jennie';
 * const secondName = 'Harper';
 * const str = 'Good afternoon ' + firstName + ' ' + secondName ',
 * nice to meet you!';
 * Re-write the above code to use a template literal. You can check your code by
 * logging the new template literal to the console.
 */

const firstName = 'Jennie';
const secondName = 'Harper';
const str = `Good afternoon ${firstName} ${secondName} nice to meet you!`;

console.log(str);