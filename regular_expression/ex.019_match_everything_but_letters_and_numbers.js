/*
Match Everything But Letters and Numbers.

You can search for the opposite of the \w with \W. 
Note, the opposite pattern uses a capital letter. 
This shortcut is the same as [^A-Za-z0-9_].
------------------------------------------------
let numbers = '42%';
let sentence = 'Coding!';

let shortHand = /\W/;

console.log(numbers.match(shortHand)); //=> '%'
console.log(sentence.match(shortHand)); //=> '!'
------------------------------------------------
*/
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;

console.log(result); //=> 6 || 5(spaces) and 1(dot)