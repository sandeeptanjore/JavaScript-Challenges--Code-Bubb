/*
* Exercise 22 - Where do you stop?
* Given the following string:
* const str = 'You need to stop when it gets too much'
* Use JavaScript to determine the position in the string where the word stop
* occurs. You can log the result (a numerical value) to the console to check.
* */

const str = 'You need to stop when it gets too much'
const strPosition = str.indexOf('stop');
console.log(`The word stop occurs at position: ${strPosition}`);