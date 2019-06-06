/**
 * Go over ITERABLE objects (such as arrays) that have indexes (numbers) that access each item
 */

//   let student = {
//      name: "Peter",
//      awesome: true,
//      degree: "JavaScript",
//      week: 1
//  }

//  for(item of student) {
//      console.log(item);          WILL NOT WORK BECAUSE OBJECTS ARE NOT ITERABLE
//  }

let catArray = ['tabby', 'british shorthair', 'burmese', 'main coon', 'rag doll'];

for (cat of catArray) {
    console.log(cat);
}