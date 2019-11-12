/*
Check For Mixed Grouping of Characters

If you want to find either Penguin or Pumpkin in a string, 
you can use the following Regular Expression: /P(engu|umpk)in/g
---------------------
let test = "Pumpkin";
let regEx = /P(engu|umpk)in/;
console.log(test.match(regEx));
---------------------
*/
let myString = "Eleanor Roosevelt";
let myRegex = /(Roosevelt)/;
let result = myRegex.test(myString);

console.log(result); //=> true