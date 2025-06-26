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
    const logInUser = loginUserMessage();
    console.log(logInUser);
    