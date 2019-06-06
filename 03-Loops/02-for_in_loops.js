/**
 * Great for iterating over values in an object.
 * For in loops can "enumerable" wich in our situation means able to access these directly within an ordering schema.
 * 
 */

//  let student = {
    //  name: "Peter",
    //  awesome: true,
    //  degree: "JavaScript",
    //  week: 1
//  }

//  for ( item in student) {
//     console.log(item);
//     console.log(student[item]);
// }

//  let dogs = ['collie', 'pitbull', 'newfie', 'lab', 'dachshund'];

//  for ( dog in dogs){
//      console.log(dogs[dog]);
//  }

//  let students = ['megan' , 'brian' , 'natasha'];

//  for (student in students){
//     // let capStud[i] = student.replace (student[0]), student[0].toUpperCase();
//      console.log(students[student]);
//  }

 let studentName = 'auTuMNul';
 let capName = '';

 for (n in studentName){
     if (n == 0) {
         capName += studentName[n].toUpperCase();
     } else {
         capName += studentName[n].toLowerCase();
     }
 }
 console.log(capName);