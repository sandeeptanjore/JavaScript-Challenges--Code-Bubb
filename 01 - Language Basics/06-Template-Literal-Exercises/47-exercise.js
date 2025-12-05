/**
 * Exercise 47 - Variable interpolation 1
 * Given the following snippet of code:
 * const age = 25;
 * const birthday = '26/08/1995';
 * const str = 'I am ' + age + ' years old on my birthday (' +
 * birthday + ')';
 *
 * Re-write the above code to use a template literal. You can check your code by
 * logging the new template literal to the console.
 */

const age = 25;
const birthday = '26/08/1995';
const str = `I am ${age} years old on my birthday (${birthday})`;
console.log(str);