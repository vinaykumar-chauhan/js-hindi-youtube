const accountId = 144553;
let accountEmail = "vinay@yahoomail.com";
var accountPassword = "123456";
accountCity = "Mumbai";
let accountState;


accountEmail = "vkc@hotmail.com";
// accountId = 2;     not allowed
accountPassword = "sdfsadf";
accountCity = "Pune";

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);

/* 
prefer not to use var because of issue of block scope & functional scope
*/