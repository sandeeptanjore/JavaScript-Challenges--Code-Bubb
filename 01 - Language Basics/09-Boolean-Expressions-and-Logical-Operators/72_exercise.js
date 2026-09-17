/**
 * Exercise 72 - If you are an admin
 *
 * Given the following if statement:
 *
 * let user = {
 *     role: 'Developer',
 *     admin: true
 * }
 *
 * if ( ) {
 *     console.log('You have access');
 * }
 *
 * Complete the boolean expression inside the parentheses of the if statement to
 * display the message in the console if the user object has a true value for its
 * admin property.
 */

let user = {
  role: "Developer",
  admin: true,
};

if (user.admin) {
  console.log("You have access");
}
