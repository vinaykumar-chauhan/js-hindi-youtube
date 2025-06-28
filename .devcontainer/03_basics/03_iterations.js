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


// ------------------------------------------------------------------

//  for of

// ["","",""];
// [{},{},{}];

const arr = [1,2,3,4,5,6];

for (const num of arr) {
    // console.log(num);    
}

const greetins = "hello world";

for (const element of greetins) {
    // console.log(element);;
    
}


// -------------------------------------------------------

//  maps

const map = new Map();                                 // new Map()  is not iterable
map.set('IN' , 'India');
map.set('USA' , 'United states of America');
map.set('Fr' , 'France');

// console.log(map);

for (const key in map) {                               // new Map()  is not iterable
    // console.log(key);
    
}

for (const [key , value] of map) {                   // destructuring 
    // console.log(key , ':', value);
        
}

const myObject = {                                
    'game1' : "NFS",
    'game2' : "spiderman"
}

// for (const key of myObject) {                       //  object is not iterable
//     console.log(key);
    
// }


const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const programming = ["js" , "rs" , "cpp" ,"swift"];

for (const key in programming) {
    // console.log(programming[key]);
    
}

//------------------------------------------------------

//for-each loop

const coding = ["js" , "rs" , "cpp" ,"swift", "java"];

// coding.forEach((val) => {
//     console.log(val);
    
// })


// function printMe(item) {
//     console.log(item); 
// }

// coding.forEach(printMe);



// coding.forEach((val , index , arr) => {             // parameters contains : value, index , array
//     console.log(val , index , arr);
    
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    },
]

myCoding.forEach( (item) => {                              // iterate object in array
//    console.log(item.languageName);                      
   
})