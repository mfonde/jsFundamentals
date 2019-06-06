

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(long.length);

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
// console.log(colors);
// console.log(colors.length);
// console.log(colors.toString());

// console.log(typeof colors);
// console.log(typeof colors.toString());

// colors.forEach(c => {console.log(c)});

let arr = [1, 2, 3, 4, 5];

console.log(arr instanceof Array);

// arrFlip = arr.reverse();

// console.log(arrFlip);

// arrFlip.forEach(v => {console.log(v)});

if (arr instanceof Array === true) {
    let revArr = arr.reverse();
    revArr.forEach(a => {console.log(a)});
} else{
    console.log('This is not an Array.');
}