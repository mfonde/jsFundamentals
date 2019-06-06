// /**
//  * Object.keys() and Object.values()
//  * 
//  * Object.keys() is a method that returns an array of a give object's own property names.
//  * 
//  * Object.values() is a method that returns an array of a given object's own enumerable property values, in the same order as that provided by a for-in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
//  */

// let spaceJam = {
//     toonSquad: {
//       human: 'Michael Jordan',
//       rabbit1: 'Bugs Bunny',
//       rabbit2: 'Lola Bunny',
//       duck: 'Daffy Duck',
//       tDevil: 'Tasmanian Devil',
//       bird: 'Tweety',
//       cat: 'Sylvester',
//       pig: 'Porky Pig'
//     },
//     monstars: {
//       0: 'Bupkus',
//       1: 'Bang',
//       2: 'Nawt',
//       3: 'Pound',
//       4: 'Blanko'
//     },
//     nbaPlayers: {
//       phoenixSuns: 'Charles Barkley',
//       newJerseyNets: 'Shawn Bradley',
//       newYorkNicks: 'Patrick Ewing',
//       charlotteHornets1: 'Larry Johnson',
//       charlotteHornets2: 'Muggsy Bogues'
//     }
//   }

//   console.log(Object.keys(spaceJam.toonSquad));
//   console.log(Object.keys(spaceJam.toonSquad.duck)); // returns indexes of values of duck

// console.log(Object.keys(spaceJam.toonSquad).toString())

// console.log(Object.values(spaceJam.toonSquad));
// console.log(Object.values(spaceJam.toonSquad)[3]);

// Square Bracket Notation with Objects
// Square bracket notation can help us be able to find a value in an object. This way can be handy if we need to set a key to a variable and then use that variable to parse through an object.

// let garden = {
//     vegetable: 'zucchini',
//     flower: 'sun flower', 
//     fruit: 'apple',
//     water: true,
//     sun: true,
//     size: 10
// }

// // // console.log(garden.water);
// // let x = 'vegetable';
// // console.log(garden[x]);  // returns zucchini
// // console.log(garden.x);  // returns undefined b/c x is a string

// // let y = 'grass';
// // console.log(garden[y]);  // returns undefined b/c grass is not in the object

// let baking = {}

// baking ['zucchini'] = 'better make some bread!'; // this creates a new key/value pairing.


// // console.log(baking.garden.vegetable); // undefined b/c baking and garden are not connected.

// // console.log(baking[garden['vegetable']]);

// console.log(baking[garden]);

let garden = {
        vegetable: 'zucchini',
        flower: 'sun flower', 
        fruit: 'apple',
        water: true,
        sun: true,
        size: 10
    }

let key = 'water';
Object.keys(garden).forEach(g => {
    //{console.log(g)})
    if (key === g) {
        // console.log(garden[key])
        // console.log(`Let's water the garden.`);
        console.group(`Let's water the garden.`)
    } else {
        // console.log(`Don't water the garden.`);
        console.group(`Don't water the garden.`)
    }
})
// console.log(Object.keys(garden));
