/**
 * Exercise 60 - A full person object
 * Given the following object representing a person:
 *  const person = {
 *      firstName: 'Sarah',
 *      lastName: 'Hennings',
 *      age: 33,
 *      role : 'Developer'
 *  }
 * write a console statement that logs the person's full name
 * (firstname and lastname) to the console output. You should include
 * a space in between their first and last name
 */

const person = {
    firstName: 'Sarah',
    lastName: 'Hennings',
    age: 33,
    role : 'Developer'
}

console.log(`Person's full name is: ${person.firstName} ${person.lastName}`);