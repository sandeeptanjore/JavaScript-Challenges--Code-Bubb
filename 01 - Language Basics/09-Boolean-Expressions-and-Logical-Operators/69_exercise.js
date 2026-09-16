/**
 * Exercise 69 - You need to know at least 3 languages
 * Given the array:
 * let languages = ['English', 'French', 'Italian'];
 *
 * Write a boolean expression (which will result in true) to determine whether the
 * languages array has at least 3 items in it. Call the .pop() function on the array
 * to remove one item then check your expression again.
 */

let languages = ["English", "French", "Italian"];

// if (languages.length===3){
//     return true;
// }

console.log(languages.length >= 3); //returns true

languages.pop();
console.log(languages.length === 3); //returns false
