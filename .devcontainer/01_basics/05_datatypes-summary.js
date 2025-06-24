// Primitive

// 7 types : String,Number,Boolean , Null, undefined, Symbol, BigInt

// const score = 100;
// const scoreValue = 100.3;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 234645654765768n;

// Reference (Non-primitive)

// Array , Objects, Functions

const heros = ["shaktiman","krish","nagraj"];

let myObj = {
    name: "vinay",
    age: 24,
}

const myFunction = function(){
    console.log("hello world");
}

// console.log(typeof myFunction);

// For more details :  https://262.ecma-international.org/5.1/#sec-11.4.3


// *******************************    Stack , Heap     *****************************
// Stack (Primitive)  , Heap (Non-Primitive)

let myyoutubename = "vinaykumarChauhan";

let anotherName = myyoutubename;

anotherName = "chaiaurcode"
// console.log(myyoutubename);
// console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "vinay@google.com";

console.log(userOne.email);
console.log(userTwo.email);