/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas */

// let list =  [  'item1',   'item2',    'item3'];
// console.log(typeof list);  // object

//let groceryList = ['oranges', 'bananas', 'oreos'];
// console.log(groceryList[2]);

// let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Cory', 'Garrett', 'Brian']]

// console.log(students[6][2]);

// console.log(`Hello ${students[6][2]}, you look nice today`)

// console.log(typeof students);
// console.log(students instanceof Array);
// console.log(groceryList instanceof Array);

/**
 * POPULATING AND REFERRING
 */

 let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

//  for (f in food) {
//      console.log(f); //returns index numbers
//      console.log(food[f]); //returns each item
//  }

food.push('Pizza');  // returns array with pizza added to end
food.splice(1, 1, 'Bananas');
food.splice(1, 2,);
//food.splice(0, 0, 'Shrimp');
food.splice(1, 0, 'Shrimp', 'Quesadilla');
food.pop();  // removes last item
food.shift();  //  removes first item
food.unshift('Pecan Pie');  //  adds item to beginning of array

 for (f of food){
     console.log(f);  //returns each item
 }
