/**
 * Exercise 73 - If you are an admin and have an active account
 *
 * Given the following if statement:
 *
 * let user = {
 *     role: 'Developer',
 *     admin: true,
 *     accountActive: true
 * }
 *
 * if ( ) {
 *     console.log('You have access');
 * }
 *
 * Complete the boolean expression inside the parentheses of the if statement to
 * display the message in the console if the user object has a true value for its
 * admin property as well as a true value for its accountActive property.
 */

let user = {
  role: "Developer",
  admin: true,
  accountActive: true,
};

if (user.admin && user.accountActive) {
  console.log("You have access");
}
