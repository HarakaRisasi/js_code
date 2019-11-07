/*
Implement a function that replaces each digit 
in the given string with a '#' character.

input = "There are 12 points"
output = "There are ## points"
*/
function replaceAllDigitsRegExp(input) {
    let regEx = /\d/g;
    
    return input.replace(regEx, '#');
}

console.log(replaceAllDigitsRegExp("There are 12 points")); //=> There are ## points
console.log(replaceAllDigitsRegExp("012ss210")); //=> ###ss###
console.log(replaceAllDigitsRegExp(" _Aas 23")); //=>  _Aas ##