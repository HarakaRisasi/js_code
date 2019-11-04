/*
Extract Matches

You can also extract the actual matches you found with the .match() method.
----------------------------------------------
let regEx = "Haraka Risasi!".match(/haraka/i);
console.log(regEx); //=> ["Haraka"]
----------------------------------------------
----------------------------------------------
let string = "Regular Expressions";
let regEx = /Expressions/i;

console.log(string.match(regEx)); //=> ["Expressions"]
----------------------------------------------
*/
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/i;
let result = extractStr.match(codingRegex);

console.log(result); //=> [coding]