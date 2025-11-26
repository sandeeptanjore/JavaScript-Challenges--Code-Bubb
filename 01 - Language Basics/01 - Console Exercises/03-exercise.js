/**
 *
 * Exercise 03 -  What day is it?
 * Write a console statement that displays the current date in the console
 */

console.log('Current Date is: ' + Date());

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
console.log(
  'Current Date is: ' + new Date().toLocaleDateString('en-US', options)
);
