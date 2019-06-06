/**
 * Iterating
 * forEach() method executes a provided function once for each array element.
 */
// forEach() has three arguments: currentValue, the index, and the entire array.
//  currentValue = the current element being processed in the array
//  index = the index of the current element being processed 
//  array = the array the forEach method was called upon

// let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// food.forEach(f => {console.log(f);});
// food.forEach((f, number, array) => {console.log(number); console.log(f), console.log(array);});

let movies = ['The Goonies', 'Short Circuit', 'Indiana Jones', 'Star Wars', 'The Little Mermaid'];

movies.push('Wet Hot American Summer');
movies.splice(4, 1, 'Aladdin');

// movies.forEach(m => {console.log(m)});

console.log(movies.indexOf('Indiana Jones'));