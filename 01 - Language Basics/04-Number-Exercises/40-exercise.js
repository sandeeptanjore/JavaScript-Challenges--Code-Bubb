/**
 * Exercise 40 - No dice
 * Create a random number with JavaScript that represents a value found on a
 * common set of playing dice (1-6). Log the value to the console to check the value you have generated.
 */

let diceNumber = Math.floor(Math.random() *6) +1;
console.log(`Random number generated between 1 and 6 is: ${diceNumber}`);