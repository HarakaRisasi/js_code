/*
Use capture groups to search and replace

You can search and replace text in a string using .replace() on a string. 
----------------------
let regEx = /silver/;
console.log("The sky is silver".replace(regEx, "Blue")); //=> The sky is Blue
----------------------
*/
let huhText = "This sandwich is good.";
let fixRegex = /good/;
let replaceText = "okey-dokey";
let result = huhText.replace(fixRegex, replaceText);

console.log(result);