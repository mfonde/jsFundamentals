/**************************
PARAMETERS - parameters keep functions generic so they can be applicable to more than one situation
***********************

function hi(name){
            (1)
  console.log(`Hi ${name}`)
                    (2)
}

hi('Autumn');
      (3)

1- The parameter(s) we need to take into the function
2- Using string interpolation, we can refer to the parameter we passed
3- This is where we define what the parameter's value will be
*/ 

// function pet(animal){
//     console.log(`I have a ${animal} for a pet.`);
// }

// pet('puggle');
// pet('fish');
// pet('pufferfish');
// pet('ocelot');

function fullName(firstName , lastName){
   let name = firstName + ' ' + lastName;
   console.log(`Hello, my name is ${name}`);
}

fullName('Megan', 'Fonde');