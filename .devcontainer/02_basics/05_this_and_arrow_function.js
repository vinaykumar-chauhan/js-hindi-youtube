const user = {
    username: "vinay",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);       //  current context
        // console.log(this);
        
    }
}
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);


// function chai(){
//     const username = "vinay";
//     console.log(this.username);                     // cannot access in function 
    
// }
// chai();


// const chai = () =>{                                 //   arrow function 
//     const username = "vinay";
//     console.log(this);  
// }
// chai();

// const addTwo = (num1,num2) => num1 + num2;             // implicit  return
const addTwo = (num1,num2) => ({username: "vinay"})       // implicit object return
// console.log(addTwo(3,4));


const myArr = [1,2,3,4,5,6];

// myArr.forEach(() =>{})