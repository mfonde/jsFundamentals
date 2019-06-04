/**
 * Hoisting - JavaScript reads through twice
 */

 //console.log(scissors);
 //scissors = 'blue';
 //console.log(scissors);
 let scissors = 'blue';
 console.log(scissors);

 b();
 console.log(a);

 function b() {
     console.log('This is all hoisted!');
 }

 var a = 'This is not hoisted';