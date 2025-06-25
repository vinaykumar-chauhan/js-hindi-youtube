// Array

const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "nagraj", "krish","chotabheem"];

const myArr2 = new Array(1,2,3,4);
 
// console.log(myArray[1]);

//   Array Methods

// myArray.push(6);
// myArray.push(7);
// myArray.pop();

// myArray.unshift(9);
// myArray.shift(9);

// console.log(myArray.includes(4));
// console.log(myArray.indexOf(4));

const newArr = myArray.join();

// console.log(myArray);
// console.log(typeof newArr);

//slice , splice

// console.log("A ", myArray);

const myn1 = myArray.slice(1,3);

// console.log(myn1);
// console.log("B ", myArray);

const myn2 = myArray.splice(1,3);

// console.log(myn2);
// console.log("C ", myArray);



// *************************    Array Basics  ***************************


const marvel_Heroes = ["ironman", "spiderman","hulk","captain america","thor"];

const dc_Heroes = ["superman","batman","flash"];

// marvel_Heroes.push(dc_Heroes);

// console.log(marvel_Heroes);
// console.log(marvel_Heroes[5][2]);

// const allHeroes = marvel_Heroes.concat(dc_Heroes);
// console.log(allHeroes);

const all_New_Heroes = [...marvel_Heroes, ...dc_Heroes];
// console.log(all_New_Heroes);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_Arr = anotherArr.flat(Infinity);
// console.log(real_another_Arr);

// console.log(Array.isArray("vinay"));
// console.log(Array.from("vinay"));
// console.log(Array.from({name : "vinay"}));    // intersting 

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1,score2,score3));





