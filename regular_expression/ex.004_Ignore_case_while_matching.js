/*
Ignore Case While Matching

i - игнорирование регистра при сопоставлении
/pattern/flags

-------------------------------
let fccRegex = /freeCodeCamp/i; 
-------------------------------
*/
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);

console.log(result); //=> true