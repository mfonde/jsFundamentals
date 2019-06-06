/************************



EXPRESSIONS
****************
let hey = function hi() {
  (1)
  console.log('HI')
}

1- The variable 'hey' is now representative of the function 'hi()'
    This is called a functional expression.

    DIFFERENCE BETWEEN DECLARATION AND EXPRESSION:
    Declarations get hoisted
    Expressions do not get hoisted

*/

let hey = function hi() {
console.log('HI');
}

//hi();  //hi is no longer defined

console.log(hey);  //[Function: hi]
