/**
 Exercise 23 - A game of two halves
 Given the following string:
 const str = 'Half 1 Half 2';
 Split the original string into two equal parts and store each half in it's own
 separate variable.
 */

const str = 'Half 1 Half 2';
const strLength = str.indexOf('Half 2');
//console.log(strLength);
const str1 = str.substring(0,strLength);
console.log(str1);
const str2 = str.substring(strLength);
console.log(str2);