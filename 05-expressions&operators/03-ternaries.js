/* TERNARIES 
* 1) Another way to write "if" statements
* 2) For ternaries, DEFAULTS ARE NECESSARY
*/

/*let w = 6;

if(w>0){
    console.log('Yes');
} else {
    console.log('No');
}

//Ternary
(w>0) ? console.log('Yes') : console.log('No');

(w==0) ? console.log('hello'): (w<0) ? console.log('hi') : console.log('hey');

*/

let age = 26;

(age > 25) ? console.log("Yay! You are old!"): (age>=25) ? console.log("Yay! You can rent a car!"): (age>=21) ? console.log("Yay! You can drink!"): (age>=18) ? console.log("Yay! You can vote!"): console.log("Sorry, you're too young to do anything fun.");

console.log(typeof(age));