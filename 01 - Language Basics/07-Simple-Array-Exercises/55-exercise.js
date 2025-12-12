/**
 * Exercise 55 - Remove an item
 * Using the following array:
 * const languages = ['JavaScript', 'PHP', 'C#', 'Python', 'Scala',
 * 'Perl'];
 * Create a new variable lastLanguage that contains the last item from the
 * languages array. Your code should also remove the last item from the
 * languages array too.
 *
 */

const languages = ['JavaScript', 'PHP', 'C#', 'Python', 'Scala','Perl'];

const lastLanguage = languages.pop()
console.log(lastLanguage);
console.log(languages);