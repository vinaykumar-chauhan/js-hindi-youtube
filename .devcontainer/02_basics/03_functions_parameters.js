function sayMyName() {
    console.log("v");
    console.log("i");
    console.log("n");
    console.log("a");
    console.log("y");
}

// sayMyName();

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
//     }

function addTwoNumbers(num1,num2){
    // let result = num1+num2;
    // return result;
    return num1 + num2;

    }

    const result = addTwoNumbers(3,4);
    addTwoNumbers(3,"4");
    addTwoNumbers(3,null);
    addTwoNumbers(3,undefined);
    addTwoNumbers(3,true);
    addTwoNumbers(3,false);

    // console.log("Result:" , result);

    function loginUserMessage(username = "sam"){
        if(!username){
            console.log("please enter a username");
            return
        }
        return `${username} just logged in`
    }
    
    // const logInUser = loginUserMessage("vinay");
    // const logInUser = loginUserMessage();
    // console.log(logInUser);
    
// ----------------------------------------------------------

//functions with objects and arrays

function calculateCartPrice(val1, val2, ...num1){                           //   Rest operator
     return num1;
}

// console.log(calculateCartPrice(200,300,400,2000));

const user = {
    username: "vinay",
    price: 199
}

function handleObject(anyobject){
   console.log(`username is ${anyobject.username} and price ${anyobject.price}`);
   
}

// handleObject(user)
// handleObject({
//     username: "vinay",
//     price: 199
// })

const myNewArr = [100,200,300,400];

function returnSecondValue(getarr){
   return getarr[2];
}

// console.log(returnSecondValue(myNewArr));
// console.log(returnSecondValue([1000,2000,3000,4000]));


