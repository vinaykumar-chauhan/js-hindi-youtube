// for 

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");        
    }
    // console.log(element);
    
    for (let i = 1; i <= 10; i++) {
        // console.log(`Outer loop value: ${i}`);
        
        for (let j = 1; j <= 10; j++) {
            // console.log(`Inner loop value: ${j} and Inner loop value: ${i}`);
                    // console.log(i + '*' + j + ' = ' + i * j);
                     
        }
    }

    let myArray = ["flash", "superman", "batman"];

    for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index];
        // console.log(element);
        
    }

}
    

//  break and continue 

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("Detected 5");
//         break;                                    // break the loop
//     }
//     console.log(`value of i is: ${index}`);    
    
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        // console.log("Detected 5");
        continue;                                     // continue loop 
    }
    // console.log(`value of i is: ${index}`);    
    
}

// while loop 

let index = 0;

// while (index <= 10) {
    // console.log(`Value of index is: ${index}`);
    // index = index + 2;   
// }

// const myArray = ["flash" , "superman" , "batman"];

// while (index < myArray.length) {
//     console.log(`value is: ${myArray[index]}`);
//     index = index + 1; 
// }


// do-while loop

let score = 11;
do {
    // console.log(`Score is : ${score}`);
    score++;
} while (score <= 10);