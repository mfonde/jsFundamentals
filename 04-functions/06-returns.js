/**************************
RETURN
***************

let hi = () => {
  return 'hi';
    (1)
};

let newName = hi();
      (2)      (3)

console.log(newName)

1- The keyword that brings our data out of our function
2- We need a new variable to hold the value of the return
3- When called, the function becomes the value of the return



***********/

// let hi = () => {
//     console.log(hi);
//     return 'hi';
//   };
  
//   let newName = hi();
  
//   console.log(newName);
//   console.log(hi());
//   hi();

// let tip = mealCost => {
//     let total = mealCost * 1.2
//     return total;
// }

// function tip(mealCost){
//     let total = mealCost * 1.2
//     return total;
// }

// let goodTip = tip(37.46);
// console.log(goodTip);

//console.log(tip(37.46));

let x = () =>{
    return 3;
}

let y = (z) => {
    return z*2;
}

console.log(y(x()));