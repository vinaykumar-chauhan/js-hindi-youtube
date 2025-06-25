const name = "vinay";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("vinayc");

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("n"));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(0,4);
console.log(anotherString);

const newStringOne = "     vinay    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = " https://vinay.com/vinay%20chauhan";
console.log(url.replace("%20", "-"));

console.log(url.includes("vinay"));

console.log(gameName.split())