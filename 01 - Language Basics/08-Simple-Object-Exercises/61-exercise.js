/**
 * Exercise 61 - How many languages do you speak?
 * Given the following object representing a person:
 *  const person = {
 *      name: 'James',
 *      age: 21,
 *      role : 'Developer',
 *      language: ['French','English','German','Polish', 'Italian']
 *  }
 * Using JavaScript, determine how many languages the person has listed in the
 * object (the length of the languages property).
 */

const person = {
    name: 'James',
    age: 21,
    role : 'Developer',
    language: ['French','English','German','Polish', 'Italian']
};
console.log(`The person speaks ${person.language.length} languages and are: ${person.language.join(',')} `);

/* Another way to extract the languges spoken */
let languages=[];
 for(i=0; i<person.language.length; i++){
    languages.push(person.language[i]);
};
 console.log(`Languages spoken are: ${languages.join(',')}`);