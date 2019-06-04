// IF ELSE STATEMENT

/*let weather = 70;

if(weather < 70){
    console.log('Wear a jacket')
} else {
    console.log('Wear shorts')
};
*/

/*let name = 'Jon';

if('Megan' == name){
    console.log('Hello, my name is' name)
} else if ('John' == name){
    console.log('Hello, my name is' name)
}
else{
    console.log('Hello, is your name Megan, or John?')
};
*/

/*let name = 'aUTuMN';

let firstLetter = name.charAt(0);
//console.log(firstLetter);

if(firstLetter === firstLetter.toUpperCase()){
console.log(name)
} else{
    console.log("hey, it's not written correctly.")
};

if(firstLetter === firstLetter.toUpperCase()){
    console.log(name[0])
} else{
    console.log(name.slice(1).toLowerCase())
} ;

if(firstLetter === firstLetter.toUpperCase()){
    console.log(firstLetter + name.slice(1).toLowerCase())
} else{
    console.log(firstLetter.toUpperCase() + name.slice(1).toLowerCase())
};

let ame = name.replace(name[0], '').toLowerCase();
console.log(ame);*/

let age = 37;

if(age <= 17){
    console.log("Sorry, you're too young to do anything.");
} else if(21 < age >= 18) {
    console.log("Yay! You can vote!");
} else if(25 < age >= 21) {
    console.log("Yay! You can drink!");
} else if(age == 25){
    console.log("Yay! You can rent a car!");
} else{
    console.log("Yay! You are old!");
}