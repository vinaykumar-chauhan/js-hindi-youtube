// global scope

var c = 300;
let a = 100;


if(true){

let a = 10;
// console.log("INNER :" , a);

const b = 20;
var c = 30;

}

// console.log(a);
// console.log(b);
// console.log(c);

//-----------------------------------------------------

// nested scope

// const result = "99%";
function one(){
     const username = "vinay";

     function two(){
        const website = "youtube";
        console.log(username)
        // console.log(result);
        
     }
//   console.log(website);
  
//   two();
}

one();

if(true){
    const username = "vinay";
    if(username === "vinay"){
       const website = " youtube";
    //    console.log(username + website); 
           }
        //    console.log(website);                          // block scope variable
}
// console.log(username);                                    // block scope variable

// ----------------  interesting  -------------------------

addone(5);
function addone(num){
   return num + 1;
}

// addTwo(5);                                             // error declaration 
const addTwo = function(num){                          // expression function
    return num + 2;
}



