/**************************
FAT ARROW FUNCTIONS
*********************
let hi = ()   => {
      (1)     (2)
  console.log('hi')
};

1- We need to set the fat arrow function to a variable
2- We use the 'fat arrow' to signify its a function


Concise : Automatic Return
*********************
let hi = () => console.log('hi');

Block Body : Not Automatic Return
*********************
let hi = () => {
  console.log('hi')
}

*/ 

//Normal

// function coffee() {
//     console.log("coffee is life");
// }

// //Fat Arrow - concise

// let coffee = () => console.log("coffee is life");

// //Fat Arrow - block

// let coffee = () => {
//     console.log("coffee is life");
// }

// let cats = (kitten, puppy) => {
//     console.log(`I have ${kitten} cats and ${puppy} dogs`);
// }

// cats(2, 12);

//CONCISE

let apples = x => `There are ${x} apples`;

console.log(apples(10));

//BLOCK

let apples2 = (x) => {
    return `There are ${x} apples also`;
}
console.log(apples2(10));
