/**
 * Exercise 53 - Better way to get the last item
 * Given the following array:
 * const arr = [92, 87, 45, 80, 1, 94, 20];
 * Can you think of another way to get the last item in the array and store it in a
 * variable called last without accessing the array's length property?
 */

const arr = [92, 87, 45, 80, 1, 94, 20];
const last = arr.pop()
console.log(`The last item in the array is: ${last}`);