/**
 * Exercise 63 - Make another object
 * Given the following two sets of variables:
 * // Object properties:
 * const name= 'Ricardo Smith';
 * const age=19;
 * const role = 'Developer';
 *
 * // Friend properties:
 * const friendName = 'Robin Marshall';
 * const friendAge = 20;
 * const friendRole = 'Developer';
 *
 * Create an object that has the properties under the 'Object properties' heading
 * and store it in a variable person.
 * Then, create an additional property on the person object called friend.
 * The friend property should contain another
 * object that itself has the properties under the 'Friend properties' section.
 */

const person = {
    name:'Ricardo Smith',
    age:19,
    role:'Developer',
    friend: {
        friendName: 'Robin Marshall',
        friendAge:20,
        friendRole:'Developer'
    }
};



