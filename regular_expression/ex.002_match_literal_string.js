/*
Match Literal Strings
-----------------------------------------------
let testStr = "Hello, my name is Haraka.";
let testRegex = /Haraka/;
console.log(testRegex.test(testStr)); //=> true

let newRegex = /Ben/;
console.log(newRegex.test(testStr)); //=> false
-----------------------------------------------
*/
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);